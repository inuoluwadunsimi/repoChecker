import spinners from './assets/spinners.gif'
function Spinner(){

    return (
        <div className='w-100 mt-20'>

            <img  width={180 } className='text-center mx-auto'  src={spinners} alt="loading...." />

        </div>
    )
}

export default Spinner