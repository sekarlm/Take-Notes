<template>
    <div>
        <b-nav tabs>
            <b-nav-item class="home">
                <router-link to='/'><b>Take Notes!</b></router-link>
            </b-nav-item>
        </b-nav>
    </div>
</template>

<style scoped>
.home b {
    color: #f4a4a4;
}
.home :hover {
    color: #df8080;
    text-decoration: none;
}
</style>