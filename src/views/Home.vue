/* eslint-disable */
<template>
  <div id="theContainer">
    <a class="navbar-brand" href="#">
      <b-row cols="2">
        <b-col id="topHead">
          <img src="../assets/images/logo.png" alt="Logo" height="100" />
        </b-col>
        <b-col id="topHeadText">
          <h1 id="topHeadTextt">
            <strong>ADJUTANT GENERAL'S BRANCH</strong>
          </h1>
        </b-col>
      </b-row>
    </a>
    <b-button
      size="sm"
      id="resetBtn"
      class="lotteryBtnP"
      squared
      variant="info"
      @click="reset()"
      >Reset Draw</b-button
    >
    <b-row cols="2">
      <b-col align-self="center">
        <div id="avatars">
          <b-avatar
            id="avatarOne"
            badge-offset="-23px"
            badge="50"
            variant="info"
            badge-variant="dark"
            size="7em"
            badge-left
            badge-top
            ><span
              ><strong>Cat-1</strong> <br />
              <strong>(3.0 Mn)</strong></span
            ></b-avatar
          >
          <b-avatar
            id="avatarTwo"
            badge-offset="-23px"
            badge="50"
            variant="warning"
            badge-variant="dark"
            size="7em"
            badge-top
            ><span
              ><strong>Cat-2</strong> <br /><strong>(2.2 Mn)</strong></span
            ></b-avatar
          >
          <b-avatar
            id="avatarThr"
            badge-offset="-23px"
            badge="100"
            variant="danger"
            badge-variant="dark"
            size="7em"
            badge-left
            ><span
              ><strong>Cat-3</strong> <br />
              <strong>(1.6 Mn)</strong></span
            ></b-avatar
          >
          <b-avatar
            id="avatarFou"
            badge-offset="-23px"
            badge="100"
            variant="primary"
            badge-variant="dark"
            size="7em"
            ><span
              ><strong>Cat-4</strong> <br />
              <strong>(1.3 Mn)</strong></span
            ></b-avatar
          >
        </div>
        <b-popover
          variant="info"
          target="avatarOne"
          triggers="hover"
          placement="topleft"
        >
          <template #title>Prize Details</template>
          <span>
            Winner gets a car worth <b>3 Million Ruppees</b> with monthly
            contribution of <b>Rs. 15,250/-</b> by Pak Army
          </span>
        </b-popover>
        <b-popover
          variant="warning"
          target="avatarTwo"
          triggers="hover"
          placement="top"
        >
          <template #title>Prize Details</template>
          Winner gets a car worth <b>2.2 Million Ruppees</b> with monthly
          contribution of <b>Rs. 11,233/-</b> by Pak Army
        </b-popover>
        <b-popover
          variant="danger"
          target="avatarThr"
          triggers="hover"
          placement="bottom"
        >
          <template #title>Prize Details</template>
          Winner gets a car worth <b>1.6 Million Ruppees</b> with monthly
          contribution of <b>Rs. 9,300/-</b> by Pak Army
        </b-popover>
        <b-popover
          variant="primary"
          target="avatarFou"
          triggers="hover"
          placement="rightbottom"
        >
          <template #title>Prize Details</template>
          Winner gets a car worth <b>1.3 Million Ruppees</b> with monthly
          contribution of <b>Rs. 8,500/-</b> by Pak Army
        </b-popover>
      </b-col>
      <b-col>
        <div id="secCol">
          <div v-if="!resultReady">
            <b-button
              size="lg"
              id="lotBtn"
              class="lotteryBtn"
              pill
              variant="success"
              @click="drawFunc()"
              >Spin for {{ this.btnName }} Draw</b-button
            >
          </div>
          <div v-else-if="resultReady">
            <b-button
              size="lg"
              id="lotBtn"
              class="lotteryBtn"
              pill
              variant="success"
              v-b-modal.modalResult
              >View Results</b-button
            >
            <!-- <b-button size="sm" id="lotBtn" class="lotteryBtnP" squared variant="info" @click="generatePdf"><span>Print Result</span><i class="fa fa-print"></i></b-button> -->
          </div>

          <br />
          <br />
          <br />
          <!-- <span>{{this.date}}</span> -->
          <div id="defAnim" v-if="tempCatDrawn == null">
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              id="wheelLogo"
              height="135"
            />
            <lottie-animation
              id="wheelDef"
              ref="loginAnimation"
              :speed="2.5"
              :animationData="require('../assets/animations/newWheel.json')"
              :loop="false"
              :autoPlay="false"
            />
          </div>
          <div id="oneAnim" v-else-if="tempCatDrawn == 1">
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              id="wheelLogo"
              height="135"
            />
            <lottie-animation
              id="wheelOne"
              ref="loginAnimation"
              :speed="2.5"
              :animationData="require('../assets/animations/newWheel.json')"
              :loop="true"
              :autoPlay="true"
            />
          </div>
          <div id="twoAnim" v-else-if="tempCatDrawn == 2">
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              id="wheelLogo"
              height="135"
            />
            <lottie-animation
              id="wheelTwo"
              ref="loginAnimation"
              :speed="2.5"
              :animationData="require('../assets/animations/newWheel.json')"
              :loop="true"
              :autoPlay="true"
            />
          </div>
          <div id="threeAnim" v-else-if="tempCatDrawn == 3">
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              id="wheelLogo"
              height="135"
            />
            <lottie-animation
              id="wheelThree"
              ref="loginAnimation"
              :speed="2.5"
              :animationData="require('../assets/animations/newWheel.json')"
              :loop="true"
              :autoPlay="false"
            />
          </div>
          <div id="fourAnim" v-else-if="tempCatDrawn == 4">
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              id="wheelLogo"
              height="135"
            />
            <lottie-animation
              id="wheelFour"
              ref="loginAnimation"
              :speed="2.5"
              :animationData="require('../assets/animations/newWheel.json')"
              :loop="true"
              :autoPlay="false"
            />
          </div>
          <div id="fiveAnim" v-else>
            <img
              src="../assets/images/logo.png"
              alt="Logo"
              id="wheelLogo"
              height="135"
            />
            <lottie-animation
              id="wheelFour"
              ref="loginAnimation"
              :speed="2.5"
              :animationData="require('../assets/animations/newWheel.json')"
              :loop="true"
              :autoPlay="false"
            />
          </div>
          <!-- <span>{{tempCatDrawn}}  AND {{spinned}}</span> -->
        </div>
      </b-col>
    </b-row>
    <b-modal size="xl" hide-footer hide-header centered id="modal">
      <div class="d-block">
        <lottie-animation
          id="confLottie"
          ref="annimationConf"
          :speed="1"
          :animationData="require('../assets/animations/confetti.json')"
          :loop="true"
          :autoPlay="true"
        />
        <span>
          <strong id="textModal">
            Draw-{{ this.tempCatDrawn }} ({{ this.winnersCount }}
            {{ this.categoryDescription[this.tempCatDrawn - 1] }})
            <span> <br /></span>
            <!-- <span id="spanText"
              >
              {{ this.categoryDescription[this.tempCatDrawn - 1]}}</span
            > -->
          </strong>
          <div
            class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news"
          >
            <span class="d-flex align-items-center">&nbsp;WINNERS</span>
          </div>
          <marquee
            class="news-scroll"
            behavior="scroll"
            direction="up"
            height="600px"
            scrollamount="20"
          >
            <div v-if="this.spinned == 1">
              <div id="categoryResult">
                <h3>Category : 1</h3>
                <b-table striped hover :fields="fields" :items="tempResultsOne">
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(paNum)="data">
                    <i>{{ data.item.paNum }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(unit)="data">
                    <i>{{ data.item.unit }}</i>
                  </template>
                  <template #cell(chOne)="data">
                    <i>{{ data.item.chOne }}</i>
                  </template>
                  <template #cell(chTwo)="data">
                    <i>{{ data.item.chTwo }}</i>
                  </template>
                  <template #cell(grade)="data">
                    <i>{{ data.item.grade }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Category : 2</h3>
                <b-table striped hover :fields="fields" :items="tempResultsTwo">
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(paNum)="data">
                    <i>{{ data.item.paNum }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(unit)="data">
                    <i>{{ data.item.unit }}</i>
                  </template>
                  <template #cell(chOne)="data">
                    <i>{{ data.item.chOne }}</i>
                  </template>
                  <template #cell(chTwo)="data">
                    <i>{{ data.item.chTwo }}</i>
                  </template>
                  <template #cell(grade)="data">
                    <i>{{ data.item.grade }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Category : 3</h3>
                <b-table
                  striped
                  hover
                  :fields="fields"
                  :items="tempResultsThree"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(paNum)="data">
                    <i>{{ data.item.paNum }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(unit)="data">
                    <i>{{ data.item.unit }}</i>
                  </template>
                  <template #cell(chOne)="data">
                    <i>{{ data.item.chOne }}</i>
                  </template>
                  <template #cell(chTwo)="data">
                    <i>{{ data.item.chTwo }}</i>
                  </template>
                  <template #cell(grade)="data">
                    <i>{{ data.item.grade }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Category : 4</h3>
                <b-table
                  striped
                  hover
                  :fields="fields"
                  :items="tempResultsFour"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(paNum)="data">
                    <i>{{ data.item.paNum }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(unit)="data">
                    <i>{{ data.item.unit }}</i>
                  </template>
                  <template #cell(chOne)="data">
                    <i>{{ data.item.chOne }}</i>
                  </template>
                  <template #cell(chTwo)="data">
                    <i>{{ data.item.chTwo }}</i>
                  </template>
                  <template #cell(grade)="data">
                    <i>{{ data.item.grade }}</i>
                  </template>
                </b-table>
              </div>
            </div>
            <div v-else-if="this.spinned == 2">
              <div id="categoryResult">
                <h3>JCO Winners</h3>
                <b-table
                  striped
                  hover
                  :fields="fieldsJS"
                  :items="tempResultsJCO"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(armyNo)="data">
                    <i>{{ data.item.armyNo }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(trade)="data">
                    <i>{{ data.item.trade }}</i>
                  </template>
                  <template #cell(arm)="data">
                    <i>{{ data.item.arm }}</i>
                  </template>
                </b-table>
              </div>
            </div>
            <div v-else-if="this.spinned == 3">
              <div id="categoryResult">
                <h3>Sldr Winners - Category One</h3>
                <b-table
                  striped
                  hover
                  :fields="fieldsJS"
                  :items="tempResultsSldrCatOne"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(armyNo)="data">
                    <i>{{ data.item.armyNo }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(trade)="data">
                    <i>{{ data.item.trade }}</i>
                  </template>
                  <template #cell(arm)="data">
                    <i>{{ data.item.arm }}</i>
                  </template>
                  <template #cell(categ)="data">
                    <i>{{ data.item.categ }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Sldr Winners - Category Two</h3>
                <b-table
                  striped
                  hover
                  :fields="fieldsJS"
                  :items="tempResultsSldrCatTwo"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(armyNo)="data">
                    <i>{{ data.item.armyNo }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(trade)="data">
                    <i>{{ data.item.trade }}</i>
                  </template>
                  <template #cell(arm)="data">
                    <i>{{ data.item.arm }}</i>
                  </template>
                  <template #cell(categ)="data">
                    <i>{{ data.item.categ }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Sldr Winners - Category Three</h3>
                <b-table
                  striped
                  hover
                  :fields="fieldsJS"
                  :items="tempResultsSldrCatThree"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(armyNo)="data">
                    <i>{{ data.item.armyNo }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(trade)="data">
                    <i>{{ data.item.trade }}</i>
                  </template>
                  <template #cell(arm)="data">
                    <i>{{ data.item.arm }}</i>
                  </template>
                  <template #cell(categ)="data">
                    <i>{{ data.item.categ }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Sldr Winners - Category Four</h3>
                <b-table
                  striped
                  hover
                  :fields="fieldsJS"
                  :items="tempResultsSldrCatFour"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(armyNo)="data">
                    <i>{{ data.item.armyNo }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(trade)="data">
                    <i>{{ data.item.trade }}</i>
                  </template>
                  <template #cell(arm)="data">
                    <i>{{ data.item.arm }}</i>
                  </template>
                  <template #cell(categ)="data">
                    <i>{{ data.item.categ }}</i>
                  </template>
                </b-table>
              </div>
              <div id="categoryResult">
                <h3>Sldr Winners - Category Five</h3>
                <b-table
                  striped
                  hover
                  :fields="fieldsJS"
                  :items="tempResultsSldrCatFive"
                >
                  <template #cell(index)="data">
                    {{ data.index + 1 }}
                  </template>
                  <template #cell(name)="data">
                    <i>{{ data.item.name }}</i>
                  </template>
                  <template #cell(armyNo)="data">
                    <i>{{ data.item.armyNo }}</i>
                  </template>
                  <template #cell(rank)="data">
                    <i>{{ data.item.rank }}</i>
                  </template>
                  <template #cell(trade)="data">
                    <i>{{ data.item.trade }}</i>
                  </template>
                  <template #cell(arm)="data">
                    <i>{{ data.item.arm }}</i>
                  </template>
                  <template #cell(categ)="data">
                    <i>{{ data.item.categ }}</i>
                  </template>
                </b-table>
              </div>
            </div>
          </marquee>
        </span>
      </div>
    </b-modal>
    <b-modal
      size="xl"
      title="Auto Finance Lucky Draw Result"
      hide-footer
      hide-header
      centered
      id="modalResult"
    >
      <div id="resultsOverall" class="d-block" ref="content">
        <b-row cols="3" style="padding: 10px">
          <b-col
            ><img
              src="../assets/images/logo.png"
              alt="Logo"
              height="80"
              style="float: left"
          /></b-col>
          <b-col
            ><h1 id="docTitle">
              <strong>ADJUTANT GENERAL BRANCH</strong>
            </h1></b-col
          >
          <b-col
            ><span id="docDate">Dated: <br />{{ this.date }}</span></b-col
          >
        </b-row>
        <h1 id="resultTitle">
          Car Purchase Scheme Ballotting Result - Offrs & JCO/Sldrs - 2023
        </h1>
        <br />
        <hr />
        <br />
        <h1>Draw 1 Winners Data</h1>
        <br />
        <div id="resultData">
          <h3>Offrs Winners - First Draw</h3>
          <h4>Category One</h4>
          <b-table striped hover :fields="fields" :items="catOneWinnersDrawOne">
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(paNum)="data">
              <i>{{ data.item.paNum }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(unit)="data">
              <i>{{ data.item.unit }}</i>
            </template>
            <template #cell(chOne)="data">
              <i>{{ data.item.chOne }}</i>
            </template>
            <template #cell(chTwo)="data">
              <i>{{ data.item.chTwo }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultData">
          <h3>Offrs Winners - First Draw</h3>
          <h4>Category Two</h4>
          <b-table striped hover :fields="fields" :items="catTwoWinnersDrawOne">
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(paNum)="data">
              <i>{{ data.item.paNum }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(unit)="data">
              <i>{{ data.item.unit }}</i>
            </template>
            <template #cell(chOne)="data">
              <i>{{ data.item.chOne }}</i>
            </template>
            <template #cell(chTwo)="data">
              <i>{{ data.item.chTwo }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultData">
          <h3>Offrs Winners - First Draw</h3>
          <h4>Category Three</h4>
          <b-table
            striped
            hover
            :fields="fields"
            :items="catThreeWinnersDrawOne"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(paNum)="data">
              <i>{{ data.item.paNum }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(unit)="data">
              <i>{{ data.item.unit }}</i>
            </template>
            <template #cell(chOne)="data">
              <i>{{ data.item.chOne }}</i>
            </template>
            <template #cell(chTwo)="data">
              <i>{{ data.item.chTwo }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultData">
          <h3>Offrs Winners - First Draw</h3>
          <h4>Category Four</h4>
          <b-table
            striped
            hover
            :fields="fields"
            :items="catFourWinnersDrawOne"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(paNum)="data">
              <i>{{ data.item.paNum }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(unit)="data">
              <i>{{ data.item.unit }}</i>
            </template>
            <template #cell(chOne)="data">
              <i>{{ data.item.chOne }}</i>
            </template>
            <template #cell(chTwo)="data">
              <i>{{ data.item.chTwo }}</i>
            </template>
          </b-table>
        </div>
        <br />
        <hr />
        <br />
        <h1>Draw 2 Winners Data</h1>
        <br />
        <div id="resultDraw">
          <h3>JCO Winners - Second Draw</h3>
          <b-table striped hover :fields="fieldsJS" :items="tempResultsJCO">
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(armyNo)="data">
              <i>{{ data.item.armyNo }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(trade)="data">
              <i>{{ data.item.trade }}</i>
            </template>
            <template #cell(arm)="data">
              <i>{{ data.item.arm }}</i>
            </template>
          </b-table>
        </div>
        <br />
        <hr />
        <br />
        <h1>Draw 3 Winners Data</h1>
        <br />
        <div id="resultDraw">
          <h3>Sldr Winners - Third Draw</h3>
          <h4>Category One</h4>
          <b-table
            striped
            hover
            :fields="fieldsJS"
            :items="tempResultsSldrCatOne"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(armyNo)="data">
              <i>{{ data.item.armyNo }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(trade)="data">
              <i>{{ data.item.trade }}</i>
            </template>
            <template #cell(arm)="data">
              <i>{{ data.item.arm }}</i>
            </template>
            <template #cell(categ)="data">
              <i>{{ data.item.categ }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultDraw">
          <h3>Sldr Winners - Third Draw</h3>
          <h4>Category Two</h4>
          <b-table
            striped
            hover
            :fields="fieldsJS"
            :items="tempResultsSldrCatTwo"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(armyNo)="data">
              <i>{{ data.item.armyNo }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(trade)="data">
              <i>{{ data.item.trade }}</i>
            </template>
            <template #cell(arm)="data">
              <i>{{ data.item.arm }}</i>
            </template>
            <template #cell(categ)="data">
              <i>{{ data.item.categ }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultDraw">
          <h3>Sldr Winners - Third Draw</h3>
          <h4>Category Three</h4>
          <b-table
            striped
            hover
            :fields="fieldsJS"
            :items="tempResultsSldrCatThree"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(armyNo)="data">
              <i>{{ data.item.armyNo }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(trade)="data">
              <i>{{ data.item.trade }}</i>
            </template>
            <template #cell(arm)="data">
              <i>{{ data.item.arm }}</i>
            </template>
            <template #cell(categ)="data">
              <i>{{ data.item.categ }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultDraw">
          <h3>Sldr Winners - Third Draw</h3>
          <h4>Category Four</h4>
          <b-table
            striped
            hover
            :fields="fieldsJS"
            :items="tempResultsSldrCatFour"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(armyNo)="data">
              <i>{{ data.item.armyNo }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(trade)="data">
              <i>{{ data.item.trade }}</i>
            </template>
            <template #cell(arm)="data">
              <i>{{ data.item.arm }}</i>
            </template>
            <template #cell(categ)="data">
              <i>{{ data.item.categ }}</i>
            </template>
          </b-table>
        </div>
        <div id="resultDraw">
          <h3>Sldr Winners - Third Draw</h3>
          <h4>Category Five</h4>
          <b-table
            striped
            hover
            :fields="fieldsJS"
            :items="tempResultsSldrCatFive"
          >
            <template #cell(index)="data">
              {{ data.index + 1 }}
            </template>
            <template #cell(name)="data">
              <i>{{ data.item.name }}</i>
            </template>
            <template #cell(armyNo)="data">
              <i>{{ data.item.armyNo }}</i>
            </template>
            <template #cell(rank)="data">
              <i>{{ data.item.rank }}</i>
            </template>
            <template #cell(trade)="data">
              <i>{{ data.item.trade }}</i>
            </template>
            <template #cell(arm)="data">
              <i>{{ data.item.arm }}</i>
            </template>
            <template #cell(categ)="data">
              <i>{{ data.item.categ }}</i>
            </template>
          </b-table>
        </div>
        <br />
        <hr />
        <br />
      </div>
      <b-button size="lg" id="lotBtn" squared variant="info" @click="print"
        ><span>Print Result</span><i class="fa fa-print"></i
      ></b-button>
      <b-button size="lg" id="lotBtn" squared variant="warning" @click="print"
        ><span>Save Result</span><i class="fas fa-file-download"></i
      ></b-button>
    </b-modal>
    <b-modal
      id="paNumModal"
      ref="modalPaNums"
      title="Submit PA Number"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="PA Number"
          label-for="num-input"
          invalid-feedback="PA Number is required"
          :state="paNumState"
        >
          <b-form-input
            id="num-input"
            v-model="paNum"
            :state="paNumState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    <b-modal size="xl" id="poolModal" hide-footer>
      <template #modal-title> POOL </template>
      <div class="d-block text-center">
        <b-row>
          <b-col>
            <h3>
              Kindly press <strong>O</strong> for Open Ballotting for this pool
            </h3>
          </b-col>
          <b-col>
            <h3>
              Kindly press <strong>M</strong> for Merit Based Ballotting for
              this pool
            </h3>
          </b-col>
        </b-row>
      </div>
      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')"
        >Close Me</b-button
      >
    </b-modal>
  </div>
</template>

<script>
import usersJSON from "../users.json";
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue
import VueConfetti from "vue-confetti";

import axios from "axios";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
import apiJSON from "../api.json";
import jsPDF from "jspdf";
import "jspdf-autotable";
import html2canvas from "html2canvas";

export default {
  name: "Home",
  components: {
    LottieAnimation,
  },
  mounted() {
    document.title = "Auto Finance";

    var currentdate = new Date();
    var datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      "  " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    this.date = datetime;
    window.addEventListener("keyup", (e1) => {
      // console.log("SPINNED -->"+ this.spinned)
      if (
        e1.key === " " &&
        this.spinned != this.tempCatDrawn &&
        this.spinned < 4 &&
        this.drawDone == false
      ) {
        e1.preventDefault();
        this.drawDone = true;
        console.log("SPIN: " + this.spinned);
        console.log("Cat Drawn: " + this.tempCatDrawn);
        this.firstTwoDraws();
      } else if (
        (e1.key === "v" || e1.key === "V") &&
        this.resultReady == true
      ) {
        this.$bvModal.show("modalResult");
        console.log(e1.keyCode);
        console.log("R E S U L T");
      } else if (e1.key === "r" || e1.key === "R") {
        this.reset();
        console.log("*- Reset Key Command -*");
      } else if (
        (e1.key === "p" || e1.key === "P") &&
        this.resultReady == true
      ) {
        this.print();
        console.log(e1.keyCode);
        console.log(e1.key);
        console.log("*- Print ALL -*");
      } else if (
        (e1.key === "p" || e1.key === "P") &&
        this.resultReady == false
      ) {
        this.printPdf();
        console.log(e1.keyCode);
        console.log(e1.key);
        console.log("*- Print Drawn -*");
      } else if (e1.key === ".") {
        this.$bvModal.show("paNumModal");
        console.log("**** ADD PA NUM ****");
      }
    });
  },
  data() {
    return {
      spinned: 1,
      pressed: 2,
      apiLink: apiJSON["api"],
      loopState: false,
      btnName: "First",
      drawDone: false,
      allDrawn: false,
      resultReady: false,
      tempResultsOne: [],
      tempResultsTwo: [],
      tempResultsThree: [],
      tempResultsFour: [],
      tempResultsJCO: [],
      tempResultsSldrCatOne: [],
      tempResultsSldrCatTwo: [],
      tempResultsSldrCatThree: [],
      tempResultsSldrCatFour: [],
      tempResultsSldrCatFive: [],
      tempCatDrawn: 0,
      winnersCount: 0,
      fields: [
        { key: "index", label: "Ser No." },
        { key: "paNum", label: "PA No." },
        { key: "name", label: "Name" },
        { key: "rank", label: "Rank" },
        { key: "unit", label: "Unit" },
        { key: "chOne", label: "Choice 1" },
        { key: "chTwo", label: "Choice 2" },
        { key: "grade", label: "Grade" },
      ],
      fieldsJS: [
        { key: "index", label: "Ser No." },
        { key: "armyNo", label: "Army No." },
        { key: "name", label: "Name" },
        { key: "rank", label: "Rank" },
        { key: "trade", label: "Trade" },
        { key: "arm", label: "Arm" },
        { key: "categ", label: "Cat" },
      ],
      catOneWinnersDrawOne: [],
      catTwoWinnersDrawOne: [],
      catThreeWinnersDrawOne: [],
      catFourWinnersDrawOne: [],

      catOneWinnersDrawTwo: [],
      catTwoWinnersDrawTwo: [],
      catThreeWinnersDrawTwo: [],
      catFourWinnersDrawTwo: [],

      catOneWinnersDrawThree: [],
      catTwoWinnersDrawThree: [],
      catThreeWinnersDrawThree: [],
      catFourWinnersDrawThree: [],

      catOneWinnersDrawFour: [],
      catTwoWinnersDrawFour: [],
      catThreeWinnersDrawFour: [],
      catFourWinnersDrawFour: [],
      config: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
      categoryDescription: ["Offrs", "JCOs", "Sldrs"],
      date: null,
      paNum: "",
      paNumState: null,
      submittedNumbers: [],
      chiefModal: false,
      agModal: false,
      chiefChoice: null,
      agChoice: null,
    };
  },
  methods: {
    firstTwoDraws() {
      this.$refs.loginAnimation.play();
      setTimeout(() => {
        this.spinFunction(this.spinned);
        console.log("Function Fin");
      }, 6000);

      // this.spinned = this.spinned +1;
      this.pressed = this.pressed + 1;

      setTimeout(() => {
        this.$bvModal.hide("modal");
        console.log("MODAL CLOSED");
        console.log("FALSED");
        document.querySelector("#lotBtn").disabled = false;
        if (this.allDrawn == true) {
          this.resultReady = true;
        }
      }, 15000);

      setTimeout(() => {
        this.drawDone = false;
      }, 16000);

      setTimeout(() => {
        this.printPdf(this.spinned);
      }, 15000);

      console.log("S P A C E B A R");
    },
    secondTwoDraws() {
      this.$bvModal.show("poolModal");
      if (this.spinned == 3) {
        console.log("CHIEF KI BAARII");
        this.chiefModal = true;
        this.agModal = false;
      } else if (this.spinned == 4) {
        console.log("AG KI BAARII");
        this.chiefModal = false;
        this.agModal = true;
      }
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.paNumState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the paNum to submitted paNums
      this.submittedNumbers.push(this.paNum);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("paNumModal");
      });
      this.name = "";
      this.nameState = null;
      console.log("ADDED PA NUMBERS -->");
      console.log(this.submittedNumbers);
    },
    start() {
      this.$confetti.start();
    },

    stop() {
      this.$confetti.stop();
    },
    drawFunc() {
      if (
        this.spinned != this.tempCatDrawn &&
        this.spinned < 7 &&
        this.drawDone == false
      ) {
        this.drawDone = true;
        console.log("SPIN: " + this.spinned);
        console.log("Cat Drawn: " + this.tempCatDrawn);
        this.firstTwoDraws();
      }
    },
    async spinFunction(x) {
      const data = {
        draw: x,
      };
      console.log("API DATA " + data.draw);
      // }
      document.querySelector("#lotBtn").disabled = true;
      if (this.tempCatDrawn == 0 || this.spinned - this.tempCatDrawn == 1) {
        await axios
          .post(this.apiLink + "/draw", data, this.config)
          .then(async (response) => {
            if (response.data.response === "success") {
              console.log("D R A W N");
              this.tempCatDrawn = response.data.cat;
              if (response.data.cat == 1) {
                this.tempResultsOne = [];
                this.tempResultsTwo = [];
                this.tempResultsThree = [];
                this.tempResultsFour = [];
                this.tempResultsOne = response.data.winCatOne;
                this.tempResultsTwo = response.data.winCatTwo;
                this.tempResultsThree = response.data.winCatThree;
                this.tempResultsFour = response.data.winCatFour;

                this.catTwoWinnersDrawOne = response.data.winCatTwo;
                this.catOneWinnersDrawOne = response.data.winCatOne;
                this.catThreeWinnersDrawOne = response.data.winCatThree;
                this.catFourWinnersDrawOne = response.data.winCatFour;
                this.btnName = "Second";
                this.winnersCount =
                  this.tempResultsOne.length +
                  this.tempResultsTwo.length +
                  this.tempResultsThree.length +
                  this.tempResultsFour.length;
                console.log("DRAW 1");
              } else if (response.data.cat == 2) {
                // this.tempResultsOne = []
                // this.tempResultsTwo = []
                // this.tempResultsThree = []
                // this.tempResultsFour = []
                // this.tempResultsOne = response.data.winCatOne
                // this.tempResultsTwo = response.data.winCatTwo
                // this.tempResultsThree = response.data.winCatThree
                // this.tempResultsFour = response.data.winCatFour

                // this.catOneWinnersDrawTwo = response.data.winCatOne
                // this.catTwoWinnersDrawTwo = response.data.winCatTwo
                // this.catThreeWinnersDrawTwo = response.data.winCatThree
                // this.catFourWinnersDrawTwo = response.data.winCatFour
                // this.btnName = "Third";
                // this.winnersCount = this.tempResultsOne.length + this.tempResultsTwo.length + this.tempResultsThree.length + this.tempResultsFour.length;
                // console.log("DRAW 2");
                this.tempResultsOne = [];
                this.tempResultsTwo = [];
                this.tempResultsThree = [];
                this.tempResultsFour = [];
                this.tempResultsJCO = response.data.winJcos;
                this.btnName = "Third";
                this.winnersCount = this.tempResultsJCO.length;
                console.log("DRAW 2");
              } else if (response.data.cat == 3) {
                // this.tempResultsOne = []
                // this.tempResultsTwo = []
                // this.tempResultsThree = []
                // this.tempResultsFour = []
                // this.tempResultsOne = response.data.winCatOne
                // this.tempResultsTwo = response.data.winCatTwo
                // this.tempResultsThree = response.data.winCatThree
                // this.tempResultsFour = response.data.winCatFour

                // this.catOneWinnersDrawThree = response.data.winCatOne
                // this.catTwoWinnersDrawThree = response.data.winCatTwo
                // this.catThreeWinnersDrawThree = response.data.winCatThree
                // this.catFourWinnersDrawThree = response.data.winCatFour
                // this.btnName = "Fourth";
                // this.winnersCount = this.tempResultsOne.length + this.tempResultsTwo.length + this.tempResultsThree.length + this.tempResultsFour.length;
                // console.log("DRAW 3");
                this.tempResultsOne = [];
                this.tempResultsTwo = [];
                this.tempResultsThree = [];
                this.tempResultsFour = [];
                this.tempResultsSldrCatOne = response.data.winSldrs[0];
                this.tempResultsSldrCatTwo = response.data.winSldrs[1];
                this.tempResultsSldrCatThree = response.data.winSldrs[2];
                this.tempResultsSldrCatFour = response.data.winSldrs[3];
                this.tempResultsSldrCatFive = response.data.winSldrs[4];
                console.log("DRAW 3");
                this.winnersCount =
                  this.tempResultsSldrCatOne.length +
                  this.tempResultsSldrCatTwo.length +
                  this.tempResultsSldrCatThree.length +
                  this.tempResultsSldrCatFour.length +
                  this.tempResultsSldrCatFive.length;
                this.allDrawn = true;
              }
              // else if (response.data.cat == 4) {
              //   this.tempResultsOne = []
              //   this.tempResultsTwo = []
              //   this.tempResultsThree = []
              //   this.tempResultsFour = []
              //   this.tempResultsOne = response.data.winCatOne
              //   this.tempResultsTwo = response.data.winCatTwo
              //   this.tempResultsThree = response.data.winCatThree
              //   this.tempResultsFour = response.data.winCatFour

              //   this.catOneWinnersDrawFour = response.data.winCatOne
              //   this.catTwoWinnersDrawFour = response.data.winCatTwo
              //   this.catThreeWinnersDrawFour = response.data.winCatThree
              //   this.catFourWinnersDrawFour = response.data.winCatFour
              //   console.log("DRAW 4");
              //   this.winnersCount = this.tempResultsOne.length + this.tempResultsTwo.length + this.tempResultsThree.length + this.tempResultsFour.length;
              //   this.btnName = "Fifth";
              // } else if (response.data.cat == 5) {
              //   this.tempResultsOne = []
              //   this.tempResultsTwo = []
              //   this.tempResultsThree = []
              //   this.tempResultsFour = []
              //   this.tempResultsJCO = response.data.winJcos
              //   this.btnName = "Sixth";
              //   this.winnersCount = this.tempResultsJCO.length;
              //   console.log("DRAW 5");
              // } else if (response.data.cat == 6) {
              //   this.tempResultsOne = []
              //   this.tempResultsTwo = []
              //   this.tempResultsThree = []
              //   this.tempResultsFour = []
              //   this.tempResultsSldrCatOne = response.data.winSldrs[0]
              //   this.tempResultsSldrCatTwo = response.data.winSldrs[1]
              //   this.tempResultsSldrCatThree = response.data.winSldrs[2]
              //   this.tempResultsSldrCatFour = response.data.winSldrs[3]
              //   this.tempResultsSldrCatFive = response.data.winSldrs[4]
              //   console.log("DRAW 6");
              //   this.winnersCount = this.tempResultsSldrCatOne.length + this.tempResultsSldrCatTwo.length + this.tempResultsSldrCatThree.length + this.tempResultsSldrCatFour.length + this.tempResultsSldrCatFive.length;
              //   this.allDrawn = true;
              // }
            } else {
              console.log("Error : ");
            }
          })
          .catch((error) => {
            console.log("Error : ", error);
          });

        // setTimeout(() => {
        this.$confetti.start();
        this.$bvModal.show("modal");
        this.$refs.loginAnimation.stop();
        // }, 3000);
        setTimeout(() => {
          this.$confetti.stop();
          this.spinned = this.spinned + 1;
        }, 10000);

        console.log("*******END********");
        // console.log(this.spinned);
        // this.$confetti.stop();
      }
    },
    async reset() {
      document.querySelector("#lotBtn").disabled = true;
      document.querySelector("#resetBtn").disabled = true;
      await axios
        .get(this.apiLink + "/reset")
        .then((response) => {
          console.log("R E S E T");
          if (response.data.response === "success") {
            this.btnName = "First";
            this.spinned = 1;
            this.pressed = 1;
            ``;
            this.loopState = false;
            this.btnName = "First";
            this.drawDone = false;
            this.resultReady = false;
            (this.tempResultsOne = []),
              (this.tempResultsTwo = []),
              (this.tempResultsThree = []),
              (this.tempResultsFour = []),
              (this.tempCatDrawn = null);

            this.catTwoWinnersDrawOne = [];
            this.catOneWinnersDrawOne = [];
            this.catThreeWinnersDrawOne = [];
            this.catFourWinnersDrawOne = [];
            this.catOneWinnersDrawTwo = [];
            this.catTwoWinnersDrawTwo = [];
            this.catThreeWinnersDrawTwo = [];
            this.catFourWinnersDrawTwo = [];
            this.catOneWinnersDrawThree = [];
            this.catTwoWinnersDrawThree = [];
            this.catThreeWinnersDrawThree = [];
            this.catFourWinnersDrawThree = [];
            this.catOneWinnersDrawFour = [];
            this.catTwoWinnersDrawFour = [];
            this.catThreeWinnersDrawFour = [];
            this.catFourWinnersDrawFour = [];
            this.makeToast(
              "warning",
              "Draw Reset",
              "All Results have been reset !"
            );
          } else {
            console.log("Error : ");
          }
        })
        .catch((error) => {
          console.log("Error : ", error);
        });

      setTimeout(() => {
        location.reload();
        document.querySelector("#lotBtn").disabled = false;
        document.querySelector("#resetBtn").disabled = false;
      }, 1000);
    },
    generatePdf() {
      var doc = new jsPDF("p", "pt", "A4");
      html2canvas(this.$refs.content, {
        scrollY: -window.scrollY,
        scrollX: -window.scrollX,
      }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 1.0);
        doc.addImage(img, "JPEG", 5, 5, 600, 500);
        doc.addPage();
        doc.text(20, 800, "Signature:__________________");
        doc.output("dataurlnewwindow");
      });
    },
    print() {
      var printCatTwoWinnersDrawOne = null;
      var printCatOneWinnersDrawOne = null;
      var printCatThreeWinnersDrawOne = null;
      var printCatFourWinnersDrawOne = null;

      // var printCatOneWinnersDrawTwo = null
      // var printCatTwoWinnersDrawTwo = null
      // var printCatThreeWinnersDrawTwo = null
      // var printCatFourWinnersDrawTwo = null

      // var printCatOneWinnersDrawThree = null
      // var printCatTwoWinnersDrawThree = null
      // var printCatThreeWinnersDrawThree = null
      // var printCatFourWinnersDrawThree = null

      // var printCatOneWinnersDrawFour = null
      // var printCatTwoWinnersDrawFour = null
      // var printCatThreeWinnersDrawFour = null
      // var printCatFourWinnersDrawFour = null

      var doc = new jsPDF("p", "pt", "A4");

      // var col = ["Sr. No.","PA Number", "Category"];
      var rows1 = [];
      var rows2 = [];
      var rows3 = [];
      var rows4 = [];
      /* The following array of object as response from the API req  */

      printCatTwoWinnersDrawOne = this.catTwoWinnersDrawOne;
      printCatOneWinnersDrawOne = this.catOneWinnersDrawOne;
      printCatThreeWinnersDrawOne = this.catThreeWinnersDrawOne;
      printCatFourWinnersDrawOne = this.catFourWinnersDrawOne;

      var x1 = 0;
      printCatOneWinnersDrawOne.forEach((element) => {
        x1 = x1 + 1;
        var temp = [
          x1,
          element.paNum,
          element.rank,
          element.name,
          element.unit,
          element.cat,
          element.index,
        ];
        rows1.push(temp);
      });
      printCatTwoWinnersDrawOne.forEach((element) => {
        x1 = x1 + 1;
        var temp = [
          x1,
          element.paNum,
          element.rank,
          element.name,
          element.unit,
          element.cat,
          element.index,
        ];
        rows1.push(temp);
      });
      printCatThreeWinnersDrawOne.forEach((element) => {
        x1 = x1 + 1;
        var temp = [
          x1,
          element.paNum,
          element.rank,
          element.name,
          element.unit,
          element.cat,
          element.index,
        ];
        rows1.push(temp);
      });
      printCatFourWinnersDrawOne.forEach((element) => {
        x1 = x1 + 1;
        var temp = [
          x1,
          element.paNum,
          element.rank,
          element.name,
          element.unit,
          element.cat,
          element.index,
        ];
        rows1.push(temp);
      });

      const margin = {
        left: 15,
        right: 15,
        top: 70,
        bottom: 30,
      };

      const rowsCount = 80;

      // number of table sections in the page
      const sections = 1;

      // space between each section
      const spacing = 5;

      // calculate each section width
      const printWidht =
        doc.internal.pageSize.width - (margin.left + margin.right);
      const sectionWidth = (printWidht - (sections - 1) * spacing) / sections;

      const pageWidth = doc.internal.pageSize.width; //Optional
      const pageHeight = doc.internal.pageSize.height;
      // let horizontalPos = pageWidth / 2;

      //**********************************************************************************
      doc.addPage();
      doc.autoTable({
        head: [["Ser.", "PA No.", "Rank", "Name", "Unit", "Cat", "Index"]],
        body: rows1,
        startY: margin.top,
        tableWidth: "auto",
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });

      doc.deletePage(1);

      const pages = doc.internal.getNumberOfPages();
      // delete unused empty page

      //Optional
      doc.setFontSize(10); //Optional

      var options = { day: "numeric", month: "short", year: "numeric" };
      var today = new Date();

      console.log(today.toLocaleDateString("en-UK", options));
      var datee = today.toLocaleDateString("en-UK", options);
      var time = "" + today;
      console.log("DATE: ", datee);
      let drawNo = 1;
      let vacancies = 0;
      for (let j = 1; j < pages + 1; j++) {
        let horizontalPos = pageWidth / 2; //Can be fixed number
        let verticalPos = pageHeight - 10; //Can be fixed number

        if (j <= 7) {
          vacancies = 240;
        } else if (j == 8) {
          drawNo = drawNo + 1;
          vacancies = 30;
        } else if (j == 9) {
          drawNo = drawNo + 1;
          vacancies = 20;
        } else if (j == 10) {
          drawNo = drawNo + 1;
          vacancies = 10;
        }

        doc.setFontSize(8);
        doc.setTextColor(0, 0, 0);
        doc.setPage(j);
        doc.text(`${j} of ${pages}`, pageWidth - 20, verticalPos, {
          align: "center",
        });

        doc.setFontSize(18);
        doc.setFont("helvetica");
        doc.setTextColor(1, 65, 28);
        doc.text("AG BRANCH", horizontalPos, 25, { align: "center" });

        doc.setFontSize(15);
        doc.setFont("helvetica");
        doc.setTextColor(1, 65, 28);
        doc.text("Car Purchase Scheme - 2023 - Offrs", pageWidth / 2, 40, {
          align: "center",
        });

        doc.setFontSize(12);
        doc.setFont("times");
        doc.setTextColor(255, 0, 0);
        doc.text(`Draw ${drawNo} - (${vacancies} Vacs) `, 70, 55, {
          align: "center",
        });

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text("Approved by", pageWidth / 2 - 120, pageHeight - 10, {
          align: "left",
        });

        doc.setFontSize(13);
        doc.setFont("helvetica");
        doc.setTextColor(0, 85, 24);
        doc.text("The COAS", pageWidth / 2 - 60, pageHeight - 10, {
          align: "left",
        });

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text(
          `on ${datee} at ${time.substring(16, 21)} hrs`,
          pageWidth / 2 + 70,
          pageHeight - 10,
          { align: "center" }
        );
      }

      // doc.save('Car Financing Result - Offrs.pdf');
      // doc.autoPrint();

      // doc.autoPrint({variant: 'non-conform'});
      this.JcoSldrPrint();
    },
    printPdf(drawNum) {
      // const pdf = new jsPDF("p", "pt", "A4");
      var tempCatOne = null;
      var tempCatTwo = null;
      var tempCatThree = null;
      var tempCatFour = null;
      var tempJco = null;
      var tempSldrCatOne = null;
      var tempSldrCatTwo = null;
      var tempSldrCatThree = null;
      var tempSldrCatFour = null;
      var tempSldrCatFive = null;

      var doc = new jsPDF("p", "pt", "A4");

      if (drawNum == 2) {
        var col = ["Ser", "Army No", "Rank", "Name", "Trade", "Arm"];
        var tabWidth = "auto";
      } else if (drawNum == 3) {
        var col = ["Ser", "Army No", "Rank", "Name", "Trade", "Arm", "Categ"];
        var tabWidth = "auto";
      } else {
        var col = ["Ser", "PA No", "Rank", "Name", "Unit", "Cat", "Index"];
        var tabWidth = "auto";
      }

      var rows = [];
      tempCatOne = this.tempResultsOne;
      tempCatTwo = this.tempResultsTwo;
      tempCatThree = this.tempResultsThree;
      tempCatFour = this.tempResultsFour;
      tempJco = this.tempResultsJCO;
      tempSldrCatOne = this.tempResultsSldrCatOne;
      tempSldrCatTwo = this.tempResultsSldrCatTwo;
      tempSldrCatThree = this.tempResultsSldrCatThree;
      tempSldrCatFour = this.tempResultsSldrCatFour;
      tempSldrCatFive = this.tempResultsSldrCatFive;

      var personnel = "Offrs";
      var vehicle = "Car";
      let vacancies = 0;

      var x = 0;

      if (drawNum == 2) {
        tempJco.forEach((element) => {
          x = x + 1;
          var row = [
            x,
            element.armyNo,
            element.rank,
            element.name,
            element.trade,
            element.arm,
          ];
          var temp = row;
          rows.push(temp);
        });
        personnel = "JCOs";
        vacancies = 50;
      } else if (drawNum == 3) {
        tempSldrCatOne.forEach((element) => {
          x = x + 1;
          var row = [
            x,
            element.armyNo,
            element.rank,
            element.name,
            element.trade,
            element.arm,
            element.categ,
          ];
          var temp1 = row;
          rows.push(temp1);
        });
        tempSldrCatTwo.forEach((element) => {
          x = x + 1;
          var row = [
            x,
            element.armyNo,
            element.rank,
            element.name,
            element.trade,
            element.arm,
            element.categ,
          ];
          var temp2 = row;
          rows.push(temp2);
        });
        tempSldrCatThree.forEach((element) => {
          x = x + 1;
          var row = [
            x,
            element.armyNo,
            element.rank,
            element.name,
            element.trade,
            element.arm,
            element.categ,
          ];
          var temp3 = row;
          rows.push(temp3);
        });
        tempSldrCatFour.forEach((element) => {
          x = x + 1;
          var row = [
            x,
            element.armyNo,
            element.rank,
            element.name,
            element.trade,
            element.arm,
            element.categ,
          ];
          var temp4 = row;
          rows.push(temp4);
        });
        tempSldrCatFive.forEach((element) => {
          x = x + 1;
          var row = [
            x,
            element.armyNo,
            element.rank,
            element.name,
            element.trade,
            element.arm,
            element.categ,
          ];
          var temp5 = row;
          rows.push(temp5);
        });
        personnel = "Sldrs";
        vehicle = "MC";
        vacancies = 450;
      } else {
        tempCatOne.forEach((element) => {
          x = x + 1;
          // if(drawNum == 1){
          //   var row = [x,element.paNum, element.cat];
          // }else{
          var row = [
            x,
            element.paNum,
            element.rank,
            element.name,
            element.unit,
            element.cat,
            element.index,
          ];
          // }
          var temp = row;
          rows.push(temp);
        });

        // var x1 = 0;
        tempCatTwo.forEach((element) => {
          x = x + 1;
          // if(drawNum == 1){
          //   var row = [x,element.paNum, element.cat];
          // }else{
          var row = [
            x,
            element.paNum,
            element.rank,
            element.name,
            element.unit,
            element.cat,
            element.index,
          ];
          // }
          var temp1 = row;
          rows.push(temp1);
        });
        // var x2 = 0;
        tempCatThree.forEach((element) => {
          x = x + 1;
          // if(drawNum == 1){
          //   var row = [x,element.paNum, element.cat];
          // }else{
          var row = [
            x,
            element.paNum,
            element.rank,
            element.name,
            element.unit,
            element.cat,
            element.index,
          ];
          // }
          var temp2 = row;
          rows.push(temp2);
        });

        // var x3 = 0;
        tempCatFour.forEach((element) => {
          x = x + 1;
          // if(drawNum == 1){
          //   var row = [x,element.paNum, element.cat];
          // }else{
          var row = [
            x,
            element.paNum,
            element.rank,
            element.name,
            element.unit,
            element.cat,
            element.index,
          ];
          // }
          var temp3 = row;
          rows.push(temp3);
        });

        vacancies =
          this.tempResultsOne.length +
          this.tempResultsTwo.length +
          this.tempResultsThree.length +
          this.tempResultsFour.length;
      }

      const margin = {
        left: 15,
        right: 15,
        top: 70,
        bottom: 30,
      };

      const rowsCount = 80;

      // number of table sections in the page
      const sections = 1;

      // space between each section
      const spacing = 5;

      // calculate each section width
      const printWidht =
        doc.internal.pageSize.width - (margin.left + margin.right);
      const sectionWidth = (printWidht - (sections - 1) * spacing) / sections;

      // add initial empty page that we will delete later,
      // we need it so when we activate it the next addPage()
      // for the second table page will be on the actial first page
      doc.addPage();

      doc.autoTable({
        head: [col],
        body: rows,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });

      // delete unused empty page
      doc.deletePage(1);

      const pages = doc.internal.getNumberOfPages();
      const pageWidth = doc.internal.pageSize.width; //Optional
      const pageHeight = doc.internal.pageSize.height; //Optional
      doc.setFontSize(10); //Optional

      var options = { day: "numeric", month: "short", year: "numeric" };
      var today = new Date();

      console.log(today.toLocaleDateString("en-UK", options));
      var datee = today.toLocaleDateString("en-UK", options);
      var time = "" + today;

      for (let j = 1; j < pages + 1; j++) {
        let horizontalPos = pageWidth / 2; //Can be fixed number
        let verticalPos = pageHeight - 10; //Can be fixed number

        doc.setFontSize(12);
        doc.setFont("times");
        doc.setTextColor(255, 0, 0);
        doc.text(`Draw - ${drawNum}  (${vacancies} Vacs)`, 70, 55, {
          align: "center",
        });

        doc.setFontSize(8);
        doc.setTextColor(0, 0, 0);
        doc.setPage(j);
        doc.text(`${j} of ${pages}`, pageWidth - 30, pageHeight - 20, {
          align: "center",
        });

        doc.setFontSize(18);
        doc.setFont("helvetica");
        doc.setTextColor(1, 65, 28);
        doc.text("AG BRANCH", horizontalPos, 25, { align: "center" });

        doc.setFontSize(15);
        doc.setFont("helvetica");
        doc.setTextColor(1, 65, 28);
        doc.text(
          `${vehicle} Purchase Scheme - 2023 (${personnel})`,
          pageWidth / 2,
          40,
          { align: "center" }
        );

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text(
          "_____________________________________________________________________________________________________",
          pageWidth / 2 - 2,
          pageHeight - 40,
          {
            align: "center",
          }
        );

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text("Approved by", pageWidth / 2 - 120, pageHeight - 20, {
          align: "left",
        });

        doc.setFontSize(13);
        doc.setFont("helvetica");
        doc.setTextColor(0, 85, 24);
        doc.text("The COAS", pageWidth / 2 - 60, pageHeight - 20, {
          align: "left",
        });

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text(
          `on ${datee} at ${time.substring(16, 21)} hrs`,
          pageWidth / 2 + 70,
          pageHeight - 20,
          { align: "center" }
        );
      }

      doc.save(`Draw ${drawNum} Result`);
      var blob = doc.output("blob");
      // var formData = new FormData();
      // formData.append("pdf", blob);
      // formData.append("filename", `Draw ${drawNum} Result`);
      // axios.post(this.apiLink + "/printPDF", formData).then((res) => {
      //   console.log(res);
      // });
      // doc.autoPrint({variant: 'non-conform'});

      // ***********************************************************************************
    },

    JcoSldrPrint() {
      // const pdf = new jsPDF("p", "pt", "A4");
      var tempJco = null;
      var tempSldrCatOne = null;
      var tempSldrCatTwo = null;
      var tempSldrCatThree = null;
      var tempSldrCatFour = null;
      var tempSldrCatFive = null;

      var doc = new jsPDF("p", "pt", "A4");

      var colJco = ["Ser.", "Army No.", "Rank", "Name", "Trade", "Arm"];
      var col = ["Ser.", "Army No.", "Rank", "Name", "Trade", "Arm", "Cat"];
      var tabWidth = "auto";

      var rows1 = [];
      var rows2 = [];
      var rows3 = [];
      var rows4 = [];
      var rows5 = [];
      var rows6 = [];
      tempJco = this.tempResultsJCO;
      tempSldrCatOne = this.tempResultsSldrCatOne;
      tempSldrCatTwo = this.tempResultsSldrCatTwo;
      tempSldrCatThree = this.tempResultsSldrCatThree;
      tempSldrCatFour = this.tempResultsSldrCatFour;
      tempSldrCatFive = this.tempResultsSldrCatFive;

      var x1 = 0;

      tempJco.forEach((element) => {
        x1 = x1 + 1;
        var row = [
          x1,
          element.armyNo,
          element.rank,
          element.name,
          element.trade,
          element.arm,
        ];
        var temp = row;
        rows1.push(temp);
      });

      var x2 = 0;
      tempSldrCatOne.forEach((element) => {
        x2 = x2 + 1;
        var row = [
          x2,
          element.armyNo,
          element.rank,
          element.name,
          element.trade,
          element.arm,
          element.categ,
        ];
        var temp = row;
        rows2.push(temp);
      });

      var x3 = 0;
      tempSldrCatTwo.forEach((element) => {
        x3 = x3 + 1;
        var row = [
          x3,
          element.armyNo,
          element.rank,
          element.name,
          element.trade,
          element.arm,
          element.categ,
        ];
        var temp = row;
        rows3.push(temp);
      });

      var x4 = 0;
      tempSldrCatThree.forEach((element) => {
        x4 = x4 + 1;
        var row = [
          x4,
          element.armyNo,
          element.rank,
          element.name,
          element.trade,
          element.arm,
          element.categ,
        ];
        var temp = row;
        rows4.push(temp);
      });

      var x5 = 0;
      tempSldrCatFour.forEach((element) => {
        x5 = x5 + 1;
        var row = [
          x5,
          element.armyNo,
          element.rank,
          element.name,
          element.trade,
          element.arm,
          element.categ,
        ];
        var temp = row;
        rows5.push(temp);
      });

      var x6 = 0;
      tempSldrCatFive.forEach((element) => {
        x6 = x6 + 1;
        var row = [
          x6,
          element.armyNo,
          element.rank,
          element.name,
          element.trade,
          element.arm,
          element.categ,
        ];
        var temp = row;
        rows6.push(temp);
      });

      const margin = {
        left: 15,
        right: 15,
        top: 70,
        bottom: 30,
      };

      var rows = [rows1, rows2, rows3, rows4, rows5, rows6];
      const rowsCount = 80;

      // number of table sections in the page
      const sections = 1;

      // space between each section
      const spacing = 5;

      // calculate each section width
      const printWidht =
        doc.internal.pageSize.width - (margin.left + margin.right);
      const sectionWidth = (printWidht - (sections - 1) * spacing) / sections;

      // *****************************************************
      doc.addPage();
      doc.autoTable({
        head: [colJco],
        body: rows1,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });
      // *****************************************************

      // *****************************************************
      doc.addPage();
      doc.autoTable({
        head: [col],
        body: rows2,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });
      // *****************************************************

      // *****************************************************
      doc.addPage();
      doc.autoTable({
        head: [col],
        body: rows3,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });
      // *****************************************************

      // *****************************************************
      doc.addPage();
      doc.autoTable({
        head: [col],
        body: rows4,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });
      // *****************************************************

      // *****************************************************
      doc.addPage();
      doc.autoTable({
        head: [col],
        body: rows5,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });
      // *****************************************************

      // *****************************************************
      doc.addPage();
      doc.autoTable({
        head: [col],
        body: rows6,
        startY: margin.top,
        tableWidth: tabWidth,
        margin,
        rowPageBreak: "avoid", // avoid breaking rows into multiple sections
        styles: { cellWidth: "wrap", font: "helvetica", fontSize: 8 },
        didDrawPage({ table, pageNumber }) {
          const docPage = doc.internal.getNumberOfPages();
          const nextShouldWrap = pageNumber % sections;

          if (nextShouldWrap) {
            // move to previous page, so when autoTable calles
            // addPage() it will still be the same current page
            doc.setPage(docPage - 1);

            // change left margin which will controll x position
            table.settings.margin.left += sectionWidth + spacing;
          } else {
            // reset left margin for the first section in every page
            table.settings.margin.left = margin.left;
          }
        },
      });
      // *****************************************************

      // delete unused empty page
      doc.deletePage(1);

      const pages = doc.internal.getNumberOfPages();
      const pageWidth = doc.internal.pageSize.width; //Optional
      const pageHeight = doc.internal.pageSize.height; //Optional
      doc.setFontSize(10); //Optional

      var options = { day: "numeric", month: "short", year: "numeric" };
      var today = new Date();

      console.log(today.toLocaleDateString("en-UK", options));
      var datee = today.toLocaleDateString("en-UK", options);
      var time = "" + today;

      var drawNo = 0;
      var vacancies = 0;
      var personnel = "";
      var vehicle = "";
      for (let j = 1; j < pages + 1; j++) {
        let horizontalPos = pageWidth / 2; //Can be fixed number
        let verticalPos = pageHeight - 10; //Can be fixed number

        if (j < 3) {
          personnel = "JCOs";
          vehicle = "Car";
          drawNo = 2;
          vacancies = 50;
        } else if (j > 2) {
          personnel = "Sldrs";
          vehicle = "MC";
          drawNo = 3;
          vacancies = 450;
        }

        doc.setFontSize(8);
        doc.setTextColor(0, 0, 0);
        doc.setPage(j);
        doc.text(`${j} of ${pages}`, pageWidth - 20, pageHeight - 20, {
          align: "center",
        });

        doc.setFontSize(18);
        doc.setFont("helvetica");
        doc.setTextColor(1, 65, 28);
        doc.text("AG BRANCH", horizontalPos, 25, { align: "center" });

        doc.setFontSize(15);
        doc.setFont("helvetica");
        doc.setTextColor(1, 65, 28);
        doc.text(
          `${vehicle} Purchase Scheme - 2023 (${personnel})`,
          pageWidth / 2,
          40,
          { align: "center" }
        );

        doc.setFontSize(12);
        doc.setFont("times");
        doc.setTextColor(255, 0, 0);
        doc.text(`Draw ${drawNo} - (${vacancies} Vacs)`, 70, 55, {
          align: "center",
        });

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text("Approved by", pageWidth / 2 - 120, pageHeight - 20, {
          align: "left",
        });

        doc.setFontSize(13);
        doc.setFont("helvetica");
        doc.setTextColor(0, 85, 24);
        doc.text("The COAS", pageWidth / 2 - 60, pageHeight - 20, {
          align: "left",
        });

        doc.setFontSize(10);
        doc.setFont("helvetica");
        doc.setTextColor(0, 0, 0);
        doc.text(
          `on ${datee} at ${time.substring(16, 21)} hrs`,
          pageWidth / 2 + 70,
          pageHeight - 20,
          { align: "center" }
        );
      }

      // doc.save('Car Financing Result - JCOs/SLDrs.pdf');
      // doc.autoPrint();
      // doc.autoPrint({variant: 'non-conform'});

      // ***********************************************************************************
    },
    savePdf() {
      var doc = new jsPDF("p", "pt", "A4");
      html2canvas(this.$refs.content, {
        scrollY: -window.scrollY,
        scrollX: -window.scrollX,
      }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 1.0);
        doc.addImage(img, "JPEG", 5, 5, 600, 500);
        doc.text(20, 800, "Signature:__________________");
        doc.save("Auto Finance Result.pdf");
      });
    },
    makeToast(variant = null, title, body) {
      this.$bvToast.toast(`${body}`, {
        title: `${title}`,
        variant: variant,
        toaster: "b-toaster-top-center",
        solid: true,
        autoHideDelay: 500,
      });
    },
  },
};
</script>

<style scoped>
@import "../notonaskharabic.css";
/* *********************************************************************************************************************************** */

/* *********************************************************************************************************************************** */
#dataRow {
  border-style: outset;
}

#slip {
  padding: 5em;
}

#star {
  color: red;
}
#printBtn {
  float: right;
}

#printBtn span {
  padding: 2em;
}
#urduText {
  margin-left: 100px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  font-family: "Noto Naskh Arabic", serif;
}

#urduTextRed {
  color: red;
  font-size: 20px;
  text-align: right;
  line-height: 40px;
  font-weight: bolder;
  font-family: "Noto Nastaliq Urdu Draft", serif;
}

#textRed {
  color: red;
  font-size: 20px;
  font-weight: bolder;
  font-family: "Noto Nastaliq Urdu Draft", serif;
}

#theContainer {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #009776; */
  background-image: url("../assets/images/luckydraw.png");
  background-repeat: no-repeat;
  background-size: cover;
}

#topHead {
  top: 1%;
  left: 0%;
  /* right:50%; */
  /* width:600; */
  position: absolute;
  z-index: 2;
}
#topHeadText {
  margin-left: 18em;
  /* border: #ba5e0e; */
  /* border-style: groove; */
  border-bottom-left-radius: 200%;
  background-color: #005518;
  background-size: cover;
  float: right;
  top: 0;
  right: 0;
  position: absolute;
}

#topHeadTextt {
  float: right;
  padding-left: 40px;
  margin-bottom: 30px;
  padding-block: 20px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 30px;
  font-weight: bolder;
  color: #e2cb16;
}

#avatars {
  margin-left: 6em;
  align-items: center;
}
.gradient-button {
  margin: 10px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 20px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  display: inline-block;
  border-radius: 25px;
}
.lotteryBtn {
  /* float: right; */
  align-self: flex-end;
  /* z-index: 0; */
  align-self: center;
  bottom: 5%;
  left: 38%;
  position: absolute;
  z-index: 2;
  /* margin: 10px; */
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 25px;
  padding: 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #bcd9cd;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  display: inline-block;
  border-radius: 25px;
  background-image: linear-gradient(
    to right,
    #00cf3b 0%,
    #3a923d 51%,
    #195225 100%
  );
  /* margin-top: 20%; */
  /* z-index: 10; */
}
.lotteryBtnP {
  position: absolute;
  right: 0;
  bottom: 0;
}
.lotteryBtn:hover {
  background-color: #3e8e41;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 10px 10px rgba(0, 0, 0, 0.23);
  margin: 8px 10px 12px;
  background-position: right center;
}
.lotteryBtnP:hover {
  background-color: #3e8e41;
}

.lotteryBtn:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.lotteryBtnP:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

/* **************************** */
#wheelLogo {
  position: absolute;
  top: 34.4%;
  right: 27.55%;
  z-index: 3;
}

#resultTitle {
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}
#docTitle {
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bolder;
  text-align: center;
  color: #01411c;
}
#docDate {
  float: right;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bolder;
  text-align: center;
  color: #01411c;
}
#resultData {
  padding-left: 20px;
  padding-right: 20px;
}
#catHead {
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  color: #c4610b;
}
#modal {
  background: -moz-linear-gradient();
}
#textModal {
  font-size: 40px;
  color: #ba5e0e;
  font-family: "Times New Roman", Times, serif;
  text-align: justify;
  align-content: center;
}

#spanText {
  font-size: 30px;
  color: #0eba53;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-align: justify;
  align-content: center;
}
#confLottie {
  z-index: 2;
  position: absolute;
  height: 500;
  width: 500;
  bottom: 8%;
}
/* **************************** */

#wheelDef {
  margin-left: 5em;
  /* margin-top: 20%; */
  float: left;
  height: 600px;
  width: 600px;
  overflow: hidden;
  /* z-index: -10; */
  /* margin: -25px 0 0 75px; */
}
#wheelOne {
  margin-left: 5em;
  /* margin-top: 20%; */
  float: left;
  height: 600px;
  width: 600px;
  overflow: hidden;
  /* z-index: -10; */
  /* margin: -25px 0 0 75px; */
}
#wheelTwo {
  margin-left: 5em;
  /* margin-top: 20%; */
  float: left;
  height: 600px;
  width: 600px;
  overflow: hidden;
  /* z-index: -10; */
  /* margin: -25px 0 0 75px; */
}
#wheelThree {
  margin-left: 5em;
  /* margin-top: 20%; */
  float: left;
  height: 600px;
  width: 600px;
  overflow: hidden;
  /* z-index: -10; */
  /* margin: -25px 0 0 75px; */
}
#wheelFour {
  margin-left: 5em;
  /* margin-top: 20%; */
  float: left;
  height: 600px;
  width: 600px;
  overflow: hidden;
  /* z-index: -10; */
  /* margin: -25px 0 0 75px; */
}

/* Splash Screen Logo Image Style */
#splashLogo {
  width: 75%;
  max-width: 300px;
}

#stAnim {
  float: inline-end;
  /* width: 100%; */
  /* max-width: 200px; */
}

#altDiv b-col {
  align-content: center;
  align-items: center;
  justify-content: center;
}

#notRegTxt {
  color: red;
  align-items: center;
}

.b-popover {
  font-size: large;
}

#notRegTxt h1 {
  font-family: "Noto Nastaliq Urdu Draft", serif;
  font-size: 30px;
  line-height: 60px;
  color: red;
  text-align: justify;
  float: left;
  /* text-align: right; */
}

/* Splash Screen Style Start */
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 200; /*so it shows on top*/
  display: flex;
  align-items: center;
  justify-content: center;
}

.splash.display-none {
  position: fixed;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
}
/* Splash Screen Style End */

/* Login Form Style Start */

#loginForm {
  border-radius: 10px;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  background: white;
}

/* Fade-in-down Animation Start */
.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  animation-delay: 1.5s;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
/* Fade-in-down Animation Start */

/* Login Form Style End */
</style>
