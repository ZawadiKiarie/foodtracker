import '../Link/Link.css'

function Link({ img, content }) {
  return (
    <div className='link-ctn'>
      <img className="link-icon" src={img} />
      <div className='link-title'>{`${content}`}</div>
    </div>
  );
}

export default Link;