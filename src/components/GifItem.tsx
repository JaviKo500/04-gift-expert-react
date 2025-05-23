
interface Props {
  title: string;
  url: string;
}

export const GifItem = ( props: Props ) => {
  const { title, url } = props;
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>
          {title}
        </p>
      </div>
    </>
  )
}
