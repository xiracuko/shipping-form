import { useForm } from 'react-hook-form';
import styles from './Authorization.module.scss';

function Authorization() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="container">
      <div className={styles.authBlock}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register('name', {
            
          })} />
          <input type="text" {...register('email', {

          })} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Authorization
// #0c060e