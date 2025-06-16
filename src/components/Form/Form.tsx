import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from 'zod';
import InputField from './components/InputForm/InputForm';

const schema = z.object({
    name:z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("El email debe ser válido").min(1, "El email es obligatorio"),
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
    confirmPassword: z.string().min(6, "La confirmación de contraseña debe tener al menos 6 caracteres"),
}).refine((data) => {return data.password === data.confirmPassword},{
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"]
})

type FormValue = z.infer<typeof schema>;

const MyF = () => {
    //Handlesubmit es para manejar el envio del formulario
    const {control, handleSubmit, formState: {errors}} = useForm<FormValue>({
        resolver: zodResolver(schema),
        
    })

    const onSubmit: SubmitHandler<FormValue> = (data) => {
        console.log("Datos del formulario:", data);
    }

        return (<form onSubmit={handleSubmit(onSubmit)}>
            <InputField
                name="name"
                control={control}
                label="Nombre"
                error={errors.name}
                />
            <InputField
                name="email"
                control={control}
                label="Email"
                error={errors.email}
                />
            <InputField
                name="password"
                control={control}
                label="Password"
                type='password'
                error={errors.password}
                />
            <InputField
                name="confirmPassword"
                control={control}
                label="Confirm password"
                type="password"
                error={errors.confirmPassword}
                />
            <button type="submit">Enviar</button>
        </form>  
        )
}

export default MyF;