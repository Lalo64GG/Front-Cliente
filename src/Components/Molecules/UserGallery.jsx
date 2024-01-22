import {Image} from '../Atoms/Image'
export const UserGallery = () => {
  const arrayImage = [ 
    { 
      src: "/img/image 18.svg", 
    },

    {
      src: "/img/image 20.svg"
    },

    {
      src: "/img/image 20.svg"
    }

  ]
  return (
    <div className='py-4 overflow-x-auto'>
      <div className='flex gap-2'>
        {
          arrayImage.map((image, index) => (
            <Image key={ index} src={image.src}/>
          ))
        }
      </div>
    </div>
  )
}
