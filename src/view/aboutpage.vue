<template>
  <v-app id="inspire" style="padding-bottom: 100px">
    <v-container>
      <div style="padding-bottom:20px">
        <v-card>
          <v-img src="./../assets/About/banniere-temp.png" max-height="344px"></v-img>
        </v-card>
      </div>
      <v-card>
        <v-list-item-content style="padding:20px">
          <p class="headline font-weight-light">
            Venue de votre imagination la plus profonde, la <span class="font-weight-regular indigo--text text--darken-4">PSYK̇</span> est prête à vous faire rêver, 
            mais prenez garde, elle peut aussi devenir votre pire cauchemar..<br>
            Plongés entre réalité et mirage, entre songe et délire, les 27 membres 
            de l’équipe se sont liés dans un objectif commun : faire de votre vie un rêve, 
            et de votre rêve une réalité.<br>
            Le côté sombre de leur imaginaire surgit parfois, 
            rongeant leur cerveau avec des cauchemars qui ne cessent de les hanter.<br><br>
            Soyez attentif, <span class="font-weight-medium indigo--text text--darken-4">P</span>ower 
            <span class="font-weight-medium indigo--text text--darken-4">S</span>leeps in 
            <span class="font-weight-medium indigo--text text--darken-4">Y</span>our Imaginary 
            <span class="font-weight-medium indigo--text text--darken-4">K̇</span>ingdom.
          </p>
        </v-list-item-content>
      </v-card>
    </v-container><br><br><br>
    <v-container fluid>
      <v-row>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding-left:15px; padding-right:15px"
                  >
                    Attachée à la défense de l’environnement, elle se nourrit
                    exclusivement de feuilles de génépi, et se lave en utilisant l’eau usée de
                    son voisin.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Alagy Clara</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    UN, DOS, ATENCION! Tu le retrouveras au Drak
                    accroché à la barrière, la tête bougeant frénétiquement.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Alliod Titouan</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Un pied en moins à cause d’un sombre accident de
                    pierrade de raclette, il n’arrêtera pas pour autant ce met somptueux.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Amrani Romain </h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Il a du coffre et ça s’entend. Avec son crâne rasé et
                    bientôt luisant, il préside le royaume des rêves d’une main de maître.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Auriol Etienne</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Respo bouffe, son passe temps est d’arroser votre
                    nourriture d’un zeste de mononucléose.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Bigay Adèle</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Cuisses en béton et montée sur ressorts, elle contribue à
                    la croissance des buissons municipaux avec le contenu de son estomac
                    les lendemains de BIE. 
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Bochet Gaëlle</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Petite par sa taille, mais grande par le coeur, kirikou n’est
                    pas grand mais il est vaillant. 50% de son poids se compose de raclette.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Bonal Maelle</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Quand il n’est pas à la recherche d’une enveloppe
                    perdue, on le retrouve au front d’une bataille de patates.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Boucard Clément</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Beaucoup d’idées proposées, pas toutes réalisées, une
                    minute de silence pour les poissons nageant dans la polia
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Chatelet Nicolas</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                     Depuis ce fameux week end de novembre, elle
                     est devenue la meilleure pote de Bernard le sculpteur de femme nue dans
                     les montagnes.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">De Sepulveda Juliette</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Travaille plus que ton père sur le chantar, pour lui se
                    lever à 3h est dérisoire
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Ghestem Alexandre</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Aussi perdu que ta voix après l’amphi Weil.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Gobert Antoine</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Venant d’un pays où la poudre est reine, c’est pourtant
                    cette dernière qui lui a coûté une cheville.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Grivot Hugo</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Rappeur en devenir, il n’a pas brûlé ses cahiers, il a
                    postiché tôt le matin. Merci c’est gentil.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Guillon Armel</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Malgré son accent, il ne couche pas avec sa cousine… Quoique.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Jovinel Melvin</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Syndrome hyperactif aigu. Mouvements bordéliques
                    permanents. Nous préconisons une dose journalière de THC pour calmer
                    ces symptômes. 
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Lacombe Emilie</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Après avoir perdu les élections présidentielles, il se
                    console maintenant dans les bras de sa chère et tendre.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Maestripieri Brice</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Jamais sans son gilet de sauvetage, il n’hésita pas à se
                    travestir pour remporter le titre de miss Wei, en vain.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Malot Alexis</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Notre hypothèse : un taux excessif de sang dans son
                    corps, lui permettant de boire plus de 10 litres d’alcool par soirée. Un des
                    piliers (de bar) de notre organisation.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Menetrier Suzie</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Très fier de son titre de mister bendo, il reste néanmoins notre meilleur
                    joueur quand il s’agit de décorer un sapin.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Mesana Paul</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Sa meilleure excuse : gnagnagna j’ai qu’une maing !!!
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Michel Thomas</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    L’aîné de l’équipe, il est pompier, ingénieur, coureur,
                    cycliste, nageur, strip teaser. Une fois il a traversé au passage piéton
                    alors que c’était rouge.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Paumier Mathieu</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Notre maman à tous, un pilier de l’équipe, un élément
                    essentiel. Sans elle, nous serions 26.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Rabaseda Colette</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Un jeu d’acteur hors-pair, un seul teaser a lancé sa
                    carrière. Il a déjà son étoile sur Hollywood Boulevard.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Reynier Guillaume</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Altiste mélomane, elle a la main verte et apprécie les
                    arômes naturels chlorophylliens.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Ricou Clara</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Tu as sans doute remarqué ses talents de danseuse,
                    tout l’amphi au dévoilement a succombé.
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Saint-Cricq Clara</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
        <v-col style="padding:30px; padding-bottom:70px" cols="auto" sm="3">
          <v-hover v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              color="grey lighten-4"
              max-width="350"
            >
              <v-img
                width="350"
                height="400"
                src="../assets/About/temp-portrait.png"
              >
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex font-italic transition-fast-in-fast-out indigo darken-4 v-card--reveal headline white--text"
                    style="height: 100%; padding:15px"
                  >
                    Expert en photobomb, peut ruiner votre vie sociale en
                    un seul photomontage. 
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text
                class="pt-6"
                style="position: relative; text-align: center"
              >
                <h3 class="display-1 font-weight-light indigo--text text--darken-4 mb-2">Trouche Vincent</h3>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>