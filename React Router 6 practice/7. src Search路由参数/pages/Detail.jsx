import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
	const [search, setSearch] = useSearchParams()
	const id = search.get("id")
	const title = search.get("title")
	const content = search.get("content")
	console.log(useLocation())
	return (
		<ul>
			<li>
				<button onClick={() => setSearch("id=233&title=233&content=233")}>click to update</button>
			</li>
			<li>消息编号：{id}</li>
			<li>消息标题：{title}</li>
			<li>消息内容：{content}</li>
		</ul>
	)
}
