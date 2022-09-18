import React, {useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
export default function Message() {
    const [messages] = useState([
		{id:'001',title:'消息1',content:'锄禾日当午'},
		{id:'002',title:'消息2',content:'汗滴禾下土'},
		{id:'003',title:'消息3',content:'谁知盘中餐'},
		{id:'004',title:'消息4',content:'粒粒皆辛苦'}
	])
    const navigate = useNavigate()
    function showDetail(m){
        navigate("detail", {
            replace:false,
            state:{
                id:m.id,
                title:m.title,
                content:m.content
            }
        })
    }
  return (
    <div>
        <ul>
            {
                messages.map(m=>{
                    return (
                        // 路由链接
                        <li key={m.id}>
                            <Link 
                                to='detail' 
                                state={{
                                    id:m.id,
                                    title:m.title,
                                    content:m.content
                                }}>
                                {m.title}
                            </Link>
                            <button onClick={() => showDetail(m)}>click for detail</button>
                        </li>
                    )
                })
            }
        </ul>
        <hr/>
        <Outlet/>
	</div>
  )
}
