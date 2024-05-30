import {  memo } from "react"
import cls from './TagsCard.module.scss'

interface ITegsCardProps {
    tags:string[]
    activeTag:string
    handleChangeActiveTag:(tag:string)=>void
}

const TagsCard = memo(({activeTag,handleChangeActiveTag, tags}:ITegsCardProps)=>{

    return (
        <div className={cls.tagsCard}>
            <ul className={cls.tagsList} >
                {tags.map((tag)=>(
                    <li 
                        className={[cls.tagItem, activeTag === tag ? cls.activeTag :'' ].join(' ')} 
                        key={tag}
                        onClick={()=>handleChangeActiveTag(tag)}
                    >
                       {tag}
                    </li>
                ))}
            </ul>
        </div>
    )
})


export default TagsCard