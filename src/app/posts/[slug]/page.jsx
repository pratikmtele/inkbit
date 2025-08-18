export default function PostPage({params}){
    const {slug} = params;
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}