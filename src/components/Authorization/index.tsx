import styles from './Authorization.module.scss';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import ReactSelect from 'react-select';
import makeAnimated from 'react-select/animated';
import { Navigate } from 'react-router-dom';
import { FormValuesType, OptionsType } from '../../app.type';

const options: OptionsType[] = [{
  value: 'rus',
  label: 'Russia'
},
{
  value: 'eng',
  label: 'United States',
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

const Authorization: React.FC = () => {
  const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset, control } = useForm<FormValuesType>();

  const onSubmit: SubmitHandler<FormValuesType> = (data) => {
    console.log(data);
    reset();
  }

  const getValue = (value: string) => value ? options.find((option) => option.value === value) : "";

  return (
    <div className="container">
      <div className={styles.authBlock}>
        <h2>Shipping Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.userInfo}>
            <input
              type="text"
              autoComplete='off'
              spellCheck={false}
              placeholder='Full name'
              {...register('name', { required: true })}
            />
            {errors?.name && <p className={styles.errorI}>Please enter name!</p>}

            <input
              type="text"
              autoComplete='off'
              spellCheck={false}
              placeholder='Email'
              {...register('email', {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:/s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1-3}\.[0-9]{1-3}\.[0-9]{1.3}\.[0-9]{1-3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors?.email && <p className={styles.errorII}>Please enter valid email!</p>}
          </div>

          <div className={styles.address}>
            <Controller
              name='country'
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) =>
                <div className={styles.countryBlock}>
                  <ReactSelect
                    className='custom-select'
                    classNamePrefix="custom-select"
                    options={options}
                    isClearable
                    isSearchable={false}
                    value={getValue(value)}
                    onChange={(newValue) => onChange((newValue))}
                    components={animatedComponents}
                    placeholder="Country"
                  />
                  {error && <p className={styles.errorIII}>Please select your country!</p>}
                </div>}
            />

            <input
              className={styles.cityInput}
              type="text"
              autoComplete='off'
              placeholder='City'
              {...register('city')}
            />
          </div>
          <button className={styles.btnSubmit}>Submit</button>

          {isSubmitSuccessful ? <Navigate to="home" /> : ""}
        </form>
      </div>
    </div>
  )
}

export default Authorization