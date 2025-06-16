import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryState =  {
    hasError: boolean;
}

type ErrorBoundaryProps = {
    children: ReactNode;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    //Viene un error en el renderizado de un componente hijo
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo){
        console.log("Error: ", error);
        console.log("Error Info: ", errorInfo);
    }
    

    render() {
        if (this.state.hasError) {
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
      }
}
export default ErrorBoundary;