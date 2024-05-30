import { ICourse } from "../../shared/types"
import { AppImage } from "../../shared/ui/Image/AppImage"
import cls from './Courses.module.scss'

interface ICoursesCardProps {
    course:ICourse
}

const CoursesCard = ({course}:ICoursesCardProps)=>{
    const { bgColor,image,name} = course

    return (
        <div className={cls.courseCard}>
            <AppImage 
                className={cls.image} 
                style={{backgroundColor:bgColor}} 
                src={image} 
                alt="image" 
            />
            <div className={cls.cardName}>{name}</div>
        </div>
    )
}

export default CoursesCard