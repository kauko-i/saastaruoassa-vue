<script setup>
import { ref, onMounted, reactive } from 'vue';
import Yksittaiset from './Yksittaiset.vue';

const suodatuksessa = ref(false);

const selectedAge = ref(null);

const iat = [
  { name: '2-3', key: '2' },
  { name: '4-6', key: '4' },
  { name: '7-10', key: '7' },
  { name: '11-14', key: '11' },
  { name: '15-17', key: '15' },
  { name: '18-24', key: '18' },
  { name: '25-50', key: '25' },
  { name: '51-69', key: '51' },
  { name: '70-74', key: '70' },
  { name: '>75', key: '75' }
];

const selectedGender = ref(null);

const sukupuolet = [
  { name: 'Mies', key: 'M' },
  { name: 'Nainen', key: 'N' }
];

function switchSuodata(e) {
  e.preventDefault();
  console.log(suodatuksessa.value);
  suodatuksessa.value = !suodatuksessa.value;
}

function onFormSubmit() {
  const result = fetch('example.org');
}

onMounted(() => {
  console.log(`Alkuperäinen suodatuksessa on ${suodatuksessa.value}.`);
});

</script>

<template>
  <meta charset="UTF-8">
    <h1 class="otsikko">Laske, kuinka täytät ravitsemussuositukset halvimmalla!</h1>
    Laskuri perustuu:
    <ul>
      <li>50 ruoka-aineen <a href="https://fineli.fi/fineli/fi/index">ravintoarvoihin</a>,</li>
      <li>niiden keskimääräisiin <a href="https://www.s-kaupat.fi/">hintoihin Prismoissa</a>,</li>
      <li>valtion ravitsemusneuvottelukunnan <a href="">suosituksiin</a> vitamiinien, kivennäisaineiden, proteiinien ja rasvojen saannista ja</li>
      <li><a href="https://en.wikipedia.org/wiki/Linear_programming">lineaariseen optimointiin</a>.</li>
    </ul>
    Syötä tietosi:
    <Form v-slot="$form" @submit="onFormSubmit">
      <fieldset>
        <label>Ikä: 
          <Select
            v-model="selectedAge"
            :options="iat"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          ></Select>
        </label>
        <label> Sukupuoli: 
          <Select
            v-model="selectedGender"
            :options="sukupuolet"
            optionLabel="name"
            optionValue="key"
            class="w-full"
          ></Select>
        </label>
        <label> Energiantarve (kcal/päivä): <InputNumber v-model="energyNeed" name="energia"/></label>
      </fieldset>
      <fieldset>
        <label><input type="checkbox">Keliakia</label>
        <label><input type="checkbox">Laktoosi-intoleranssi</label>
        <label><input type="checkbox">Vegetaristi</label>
        <label><input type="checkbox">Vegaani</label>
      </fieldset>
      <Button @click="switchSuodata" :label="`${suodatuksessa ? 'Älä suodatakaan' : 'Suodata ruokia manuaalisesti'}`"></button>
      <Yksittaiset v-if="suodatuksessa"/>
      <Button type="submit" label="Laske!" />
    </Form>
</template>

<style>
.otsikko {
  color: red;
  font-family: sans-serif;
}

.p-select {
  background-color: #ddd !important;
  width: 5em;
}

.p-select-option {
  background-color: #ddd !important;
  border-bottom: 1px solid #eee;
}

.p-inputnumber {
  background-color: #ddd;
  width: 10em;
}

.p-button {
  background-color: #800;
  margin: 0.1rem !important;
}

body {
  font-family: system-ui, sans-serif;
}
</style>
