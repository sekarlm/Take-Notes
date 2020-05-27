<template>
    <b-container class="details">
            <b-row>
                <b-col sm="8" offset="2">
                    <b-jumbotron>
                        <template v-slot:lead>
                            Title of this notes
                        </template>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <b-button variant="primary" to="/take-a-note">Edit</b-button>
                    </b-jumbotron>
                </b-col>
            </b-row>
        </b-container> 
</template>