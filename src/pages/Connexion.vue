<template>
    <v-app :style="{background: '#F3F3F8'}">
        <v-container class="my-auto">
            <v-row justify="center" align="center" align-content="center">
                <!-- Image -->
                <v-col cols="12" xl="5" lg="5" md="5">
                    <v-img :src="images.ibouImg"></v-img>
                </v-col>

                <v-col cols="12" xl="5" lg="5" md="5">
                    <v-card flat class="pa-10">
                        <!-- Banner -->
                        <div class="text-h5 font-weight-bold mb-5">
                            <span class="oem-text">Me connecter </span>
                            <span class="dark--text">à Orange et Moi</span>
                        </div>

                        <!-- Alert when login fails -->
                        <v-alert v-if="loginFails" dense type="error">Login ou mot de passe incorrecte</v-alert>

                        <!-- Auth form -->
                        <v-form @submit.prevent="login">
                            <v-text-field
                                outlined
                                clearable
                                label="Numéro de mobile"
                                v-model="form.fields.username"
                                :error-messages="form.errors.username"
                            />

                            <v-text-field
                                outlined
                                clearable
                                type="password"
                                label="Mot de passe"
                                v-model="form.fields.password"
                                :error-messages="form.errors.password"
                            />

                            <v-btn
                                block x-large dark
                                type="submit"
                                color="indigo"
                                :loading="loading"
                            >
                                Soumettre
                            </v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
import ibouImg from '../assets/img/ibou-connection.svg'

export default {
    name: 'ConnexionPage',
    data() {
        return {
            loginFails: false,
            loading: false,
            form: {
                fields: { username: '', password: '', rememberMe: true },
                errors: { username: '', password: '' }
            },
            images: {
                ibouImg: ibouImg
            }
        }
    },
    methods: {
        login() {
            this.loading = true;
            this.$axios.post('/auth/login', this.form.fields)
                .then(response => {
                    this.$store.commit('auth/setToken', response);
                    this.$store.commit('auth/setMobile', this.form.fields.username);
                    this.$axios.defaults.headers.common['Authorization'] = `${response.token_type} ${response.access_token}`;
                    this.$router.push({ name: 'dashboard' });
                })
                .catch(error => {
                    if (error.status == 400) {
                        this.loginFails = true
                    }
                })
                .finally(() => {
                    this.loading = false
                })
        }
    }
}
</script>
