import { useForm } from 'react-hook-form';
import styles from './Authorization.module.scss';

function Authorization() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  }

  return (
    <div className="container">
      <div className={styles.authBlock}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('name', {
            required: true,
          })} />
          {errors?.name && <p>Please enter name!</p>}

          <input type="text" {...register('email', {
            required: true,
            pattern: /^(([^<>()[\]\\.,;:/s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1.3}\.[0-9]{1-3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })} />
          {errors?.email && <p>Please enter valid email!</p>}

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Authorization
// #0c060e