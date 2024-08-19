import '../Button/Button.css'

function Button({ content }){
  return (
    <div>
      <button className='button'>{`${content}`}</button>
    </div>
  );
}

export default Button;