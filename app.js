Vue.component("mi-tabla", {
  props: {
    titulos: {
      type: Array,
      required: true,
    },
    registros: {
      type: Array,
      required: true,
    },
    clases: {
      type: Object,
      required: true,
    },
    indice: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div>
        <table class="table" :class="clases">
            <thead :style="indice">
                <tr>
                    <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(registro, i) in registros" :key="i">
                    <th>{{ i + 1 }}</th>
                    <th v-for="(row, r) in registro" :key="r">{{row}}</th>
                </tr>
            </tbody>
        </table>
    </div>
    `,
});

var app = new Vue({
  el: "#app",
  data: {
    tabla1: {
      titulos: ["ID", "Nombre", "Apellido", "Provincia"],
      registros: [
        ["Jose", "Velez", "San Luis"],
        ["Ramon", "Gomez", "Santa Fe"],
        ["Marcelo", "Godino", "Buenos Aires"],
        ["Ramiro", "Gimenez", "Salta"],
      ],
      clases: {
        "table-dark": true,
        "text-secondary": true,
      },
      indice: {
        "background-color": "cadetblue",
        color: "black",
      },
    },
    tabla2: {
      titulos2: ["ID", "Nombre", "Apellido", "Provincia"],
      registros2: [
        ["Celso", "Fernandez", "La Pampa"],
        ["Matias", "Perez", "Formosa"],
        ["Marcela", "Garcia", "Chaco"],
        ["Omar", "Ramirez", "Misiones"],
      ],
      clases2: {
        "table-info": true,
        "text-success": true,
      },
      indice2: {
        "background-color": "black",
        color: "white",
      },
    },
    tabla3: {
      titulos3: ["ID", "Nombre", "Apellido", "Provincia"],
      registros3: [
        ["Ernesta", "Resta", "Chubut"],
        ["Joaquin", "Morales", "Rio Negro"],
        ["Roberto", "Sanchez", "Tucuman"],
        ["Debora", "Esquer", "Tierra del fuego"],
      ],
      clases3: {
        "table-danger": true,
        "text-primary": true,
      },
      indice3: {
        "background-color": "brown",
        color: "white",
      },
    },
  },
});
