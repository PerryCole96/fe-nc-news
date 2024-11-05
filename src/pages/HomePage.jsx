import {useState} from 'react'
import ArticleList from '../components/ArticleList'
import Header from '../components/Header.jsx'
export default function HomePage() {

    // const [filterTopic, setFilterTopic] = useState(null)
// topic={filterTopic}
    return(
     <div>
        <Header />
        <ArticleList />
     </div>

    )
}