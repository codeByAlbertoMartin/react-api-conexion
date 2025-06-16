import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

class AxiosService {
    private axiosInstance: AxiosInstance
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL: baseURL,
        })
    this.setupInterceptors();
    }

    private setupInterceptors() :void {
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                console.log("Request madee to ", config.url);
                return config;
            },
            (error) => {
                console.error("Error in request: ", error);
                return Promise.reject(error);
            }
        )

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                console.log(`Response received from ", response.config.url)` , {
                    data: response.data,
                    status: response.status,
                })
                return response;
            },
            (error) => {
                if (error.response) {
                    console.error(`Error response from ${error.response.config.url}:`, {
                        data: error.response.data,
                        status: error.response.status,
                    });
                } else if (error.request) {
                    console.error("No response received:", error.request);
                } else {
                    console.error("Error setting up request:", error.message);
                }
                return Promise.reject(error);
            }   
        )
    }
    public getAxiosInstance(): AxiosInstance {
        return this.axiosInstance;
    }
}

export const axiosService = new AxiosService("https://rickandmortyapi.com/api");