import './styles.css'

export const PostCard = ({title,cover,body,id}) =>(
        <div className="post" alt={title}>
              <img src={cover} alt={title}/>
              <div key={id} className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
            </div>
    );
