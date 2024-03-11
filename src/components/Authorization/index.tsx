import styles from './Authorization.module.scss';
import { useForm, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';

const options = [{
  value: 'rus',
  label: 'Russia'
},
{
  value: 'eng',
  label: 'USA',
},
{
  value: 'jpn',
  label: "Japan"
},
{
  value: 'nor',
  label: 'Norway'
}]

const animatedComponents = makeAnimated();

function Authorization() {
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm();
  
  const onSubmit = (data: any) => {
    console.log(data);
    reset();
  }

  const getValue = (value: any) => value ? options.find((option) => option.value === value) : "";

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

          <Controller
            name='countries'
            rules={{ required: true }}
            control={control}
            render={({ field: {onChange, value}, fieldState: { error } }) =>
              <>
                <ReactSelect 
                  options={options} 
                  isClearable 
                  isMulti 
                  value={getValue(value)}
                  onChange={(newValue) => onChange((newValue))}
                  components={animatedComponents}
                  closeMenuOnSelect={false}
                  classNamePrefix="custom-select"
                  placeholder="Select your country"
                />
                {error && <p>Please select your country!</p>}
              </>}
          />

          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Authorization
// #0c060e