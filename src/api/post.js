import router from "@/router";
import {getClientAccessToken} from "@/src/api/client";
export const getNotcie = () =>
	getClientAccessToken.get("/notice");
export const getPost = () =>
	getClientAccessToken.get("/post?sort-type=recency");
export const getPostDetail = () =>
	getClientAccessToken.get(
		`/post/detail?post-id=${localStorage.getItem("postId")}`
	);
export const getSearchPost = q =>
	getClientAccessToken.get(`/post/search?q=${q}`);
export const patchHeart = () =>
	getClientAccessToken.patch("/post/heart", {
		postId: localStorage.getItem("postId"),
	});
export const postComment = comment =>
	getClientAccessToken.post("/post/comment", {
		comment,
		postId: localStorage.getItem("postId"),
	}).then(() => {
		alert("회원가입 완료");
		window.location.reload();
	});
export const postCraetePost = (contentType, accessType, content) =>
	getClientAccessToken.post("/post", {
		accessType,
		contentType,
		content,
	}).then(() => {
		alert("글 작성 완료!");
		router.push("/");
	});
export const postReport = content =>
	getClientAccessToken.post("/report", {
		content,
		postId: localStorage.getItem("postId"),
	});
