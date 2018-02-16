<template>
    <header>
        <a href="" class="brand">Punch</a>
        <nav>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/news">News</nuxt-link></li>
                <li><nuxt-link to="/metro">Metro</nuxt-link></li>
                <li><nuxt-link to="/politics">Politics</nuxt-link></li>
                <!-- <li><nuxt-link to="/sport">Sport</nuxt-link></li>
                <li><nuxt-link to="/business">Business</nuxt-link></li>
                <li><nuxt-link to="/entertainment">Entertainment</nuxt-link></li> -->
            </ul>
            
        </nav>
        <nav>
            <ul>
                <li><nuxt-link to="/sport">Sport</nuxt-link></li>
                <li><nuxt-link to="/business">Business</nuxt-link></li>
                <li><nuxt-link to="/entertainment">Entertainment</nuxt-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
    header {
        width: 100%;
        background: #900;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 5px;
        /* height:  50px; */
    }

    .brand {
        color: #fff;
        font-weight: 700;
        font-size: 24px;
        text-decoration: none;
        text-align: center;
        display: block;
        margin: 0 auto;
    }

    ul li a {
        color: #fff;
        text-decoration: none;
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        padding: 0;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        /* overflow-x: auto;
        overflow-y: hidden; */
    }

    li {
        color: #fff;
        display: table;
        margin: 0 auto;
        text-align: center;
    }
</style>
