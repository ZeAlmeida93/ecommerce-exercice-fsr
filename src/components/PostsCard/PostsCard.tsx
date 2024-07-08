import styles from './PostsCard.module.css'
import { Icon } from '@iconify/react/dist/iconify.js'

type PostsCardType = {

PostTitle : string;
PostCategories : Array<string>;
PostImage : string;
PostSummary : string;
PostDate: string;
PostComments: number;
PostLink: string;



}


function PostsCard(props: PostsCardType) {

    const {

        PostTitle,
        PostCategories,
        PostImage,
        PostSummary,
        PostDate,
        PostComments,
        PostLink } = props


    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                {<span>New</span>}
                <img src={PostImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.categories}>
                 {PostCategories.map ((PostCategories) => <span>{PostCategories}</span>)}
                </div>
                <h3 className={styles.title}>{PostTitle}</h3>
                <p className={styles.summary}>
                    {PostSummary}
                </p>
                <div className={styles.postMeta}>
                    <div className={styles.metadata}>
                        <Icon icon="mdi:clock-outline" height="2rem" />
                       {PostDate}
                    </div>
                    <div className={styles.metadata}>
                        <Icon icon="ooui:chart" height="2rem" />
                        {PostComments}
                    </div>
                </div>
                <a href={PostLink}>
                Learn More
                    <Icon icon="material-symbols-light:chevron-forward" height="2.5rem" />
                </a>
            </div>

        </div>
    )
}

export default PostsCard