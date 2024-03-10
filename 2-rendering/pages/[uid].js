

export default function UserIdPage(props) {
  return (
    <div>UserId {props.id}</div>
  )
}



export async function getServerSideProps(ctx){
const {params,req,res} = ctx;
const userId = params.uid;

    return {
        props:{
            id: "userId-" + userId
        }
    }
}