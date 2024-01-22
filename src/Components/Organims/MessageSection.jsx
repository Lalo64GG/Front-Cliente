import { Seeker } from '../Atoms/Seeker';
import { MessageContain } from '../Molecules/MessageContain';

export const MessageSection = ({setId, setIdReceiver}) => {
  return (
    <section className='overflow-y-auto w-[320px]' style={{
        background: 'linear-gradient(180deg, #212529 0%, rgba(33, 37, 41, 0.00) 100%)',
        backgroundColor: '#010409'
    }}>
        <Seeker section={ " Messages " } messages={"128"} />
        <MessageContain setId= { setId } setIdReceiver = { setIdReceiver }/>
    </section>
  )
}
