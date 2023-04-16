import { useMediaQuery } from 'react-responsive'
import { stories } from '../../../data/home'
import { ArrowRight, Plus } from '../../../svg'
import './style.css'

export default function Stories() {
    const media1175 = useMediaQuery({
        query: "(max-width:1175px)"
    })
    const media1030 = useMediaQuery({
        query: "(max-width:1030px)"
    })
    const media960 = useMediaQuery({
        query: "(max-width:960px)"
    })
    const media885 = useMediaQuery({
        query: "(max-width:885px)"
    })
    const total =media885 ? 5 : media960 ? 4 : media1030 ? 5 : media1175 ? 4 : stories.length
    return (
        <div className='stories'>
            <div className='create_story_card'>
                <img src='../../../images/default_pic.png' alt='create_story_card' className='create_story_img' />
                <div className='plus_story'>
                    <Plus color={'#fff'} />
                </div>
                <div className='create_story_text'>Create Story</div>
            </div>
            {stories.slice(0, total).map((data, i) => (
                <div className='story' key={i}>
                    <img src={data.image} alt='stories' className='story_img' />
                    <div className='story_profile_pic'><img src={data.profile_picture} alt='story profile pic' /></div>
                    <div className='story_profile_name'>{data.profile_name}</div>
                </div>
            ))}
            <div className='white_circle'>
                <ArrowRight color={"#65676b"} />
            </div>
        </div>
    )
}
