<template>
    <nav id="main-nav">
        <h2 class="hidden">Main Navigation</h2>
        <button class="menu-toggle">
          <span class="bar" role="presentation"></span>
          <span class="bar" role="presentation"></span>
          <span class="bar" role="presentation"></span>
        </button>
        <ul>
            <li v-for="link in navigation" :key="link.id"><a v-bind:href="link.url">{{link.title}}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'MainNav',
    data: function() {
        let navItemId = 0;
        return {
            navigation: [
            {
                'id'    : navItemId++,
                'title' : 'menu',
                'url'   : 'menu.html'
            },
            {
                'id'    : navItemId++,
                'title' : 'specials',
                'url'   : 'specials.html'
            },
            {
                'id'    : navItemId++,
                'title' : 'locations',
                'url'   : 'locations.html'
            },
            {
                'id'    : navItemId++,
                'title' : 'event booking',
                'url'   : 'event-bookings.html'
            },
            {
                'id'    : navItemId++,
                'title' : 'about',
                'url'   : 'about-us.html'
            },
            {
                'id'    : navItemId++,
                'title' : 'contact',
                'url'   : 'contact.html'
            },
        ]}
    }
}
</script>

<style lang="scss" scoped>
button.menu-toggle {
    padding: 1em;
    background: transparent;
    border: 0px;

    .bar {
        display: block;
        width: 3em;
        height: 4px;
        background: black;

        &:not(:last-of-type) {
        margin-bottom: 0.5em;

        }
    }
}
nav ul {
    list-style: none;
    padding: 0px;
    display: flex;
    li {
        padding: 0 1em;

        a {
            text-decoration: none;
            color: $feature-color1;
        }
    }
}
</style>