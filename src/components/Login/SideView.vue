<template>
    <div class="side-container">
        <div class="side-background" :style="sideBackgroundStyle">
            <div class="frame-info-container">
                <h1>About FRAME</h1>
                <p>‘프레임’은 시와 글귀 문화를 공유하는 커뮤니티입니다. 자유롭게 글을 쓸 수 있고<br/> 
                누구든지 작가의 꿈을 도전해볼 수 있습니다. 어디서든 당신의 생각을 많은 사람들과<br/>
                공유해보세요.</p>

                <h1>Features</h1>
                <p>글쓰기 기능을 통해 자신의 생각을 자유롭게 표현해보세요.</p>
                <p>작가 신청 기능을 통해 프레임에서 작가의 꿈을 이뤄보세요.</p>
                <p>글 저장 기능을 통해 마음에 드는 글을 저장해보세요.</p>
            </div>
        <img :src="authArt">
        </div>
    </div>
</template>

<script>
import { authBackground, authArt } from "@/assets/img";
export default {
    name : "SideView",
    data() {
        return {
            authArt,
            sideBackgroundStyle : {
                backgroundImage : `url(${authBackground})`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
$font : "AppleSDGothicNeo";

.side-container {
    overflow: hidden;

    img {
        position: absolute;
        width: 25rem;
        bottom: 3%;
        left: 30%;
    }
}

.side-background {
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 100vh;
    height: 99vh;
    width: 66vw;
    display: flex;
    justify-content: center;
    position: relative;
} 

.frame-info-container
{
    margin: 7rem 0 0 17rem;
    color: white;
    font-family: $font;

    h1 {
        margin-bottom: 2.15rem;
        font-weight: 600;
    }

    p {
        margin-bottom: 1.5rem;
        font-weight: 100;
    }
}

@media screen and (max-width: 1540px) {
    .side-container img {
        width: 20rem;
    }
    .frame-info-container {
        font-size: 0.7rem;
    }
}
</style>