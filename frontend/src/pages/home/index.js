import Header from '../../components/header'
import './styles.css'
import LeftHome from '../../components/home/left'
import { useSelector } from 'react-redux'
import RightHome from '../../components/home/right'
import Stories from '../../components/home/stories'
import CreatePost from '../../components/createPost'
export default function Home({setVisible}) {
    const { user } = useSelector((user) => ({ ...user }))
    return (<>
        <Header />
        <div className='home'>
            <LeftHome user={user} />
            <div className='homeMiddle'>
                <Stories />
                <CreatePost setVisible={setVisible}/>
            </div>
            <RightHome />
        </div>
    </>
    )
}