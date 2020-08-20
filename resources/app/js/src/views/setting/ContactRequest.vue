<template>
    <div class="w-full">
        <app-header activeItem="0"></app-header>
        <bread-crumb icon="address-book" type="svg" text="mis contactors" 
                    :second="true" second_icon="DownloadIcon" second_text="Descargar todos los contactos"/>
        <div class="flex w-full flex-col bg-white-grey setting-contact-main">
            <div class="bg-white">
                <div>
                    <vs-table :data="contacts">
                    <template slot="thead">
                        <vs-th>NOMBRE</vs-th>
                        <vs-th>EMAIL</vs-th>
                        <vs-th>TEL</vs-th>
                        <vs-th>PUESTO</vs-th>
                        <vs-th>COMPANIA</vs-th>
                        <vs-th>PAIS</vs-th>
                        <vs-th></vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                            <vs-td>
                            {{ data[indextr].requestor.first_name }} {{ data[indextr].requestor.last_name }}
                            </vs-td>

                            <vs-td>
                            {{ data[indextr].requestor.email }}
                            </vs-td>

                            <vs-td>
                            {{ data[indextr].requestor.phone }}
                            </vs-td>

                            <vs-td>
                            {{ data[indextr].requestor.address }}
                            </vs-td>

                            <vs-td>
                            {{ data[indextr].requestor.company }}
                            </vs-td>

                            <vs-td>
                            {{ data[indextr].requestor.country }}
                            </vs-td>

                            <vs-td>
                            <vs-button type="filled" class="link-btn" @click="openDetail(data[indextr].id)" :class="(!data[indextr].active)? 'cyan-dark' : 'grey-real'">
                                VER MAS
                            </vs-button>
                            </vs-td>

                        </vs-tr>
                    </template>

                    </vs-table>
                </div>
                <vs-popup title="" class="contact-popup" :active.sync="detailShow">
                    <div class="flex justify-end text-white text-right">
                        <div class="bg-cyan-dark" style="padding: 10px 24px">CONTACTOR POR TELEFONO</div>
                    </div>
                    <div class="px-20 mt-8" v-if="active_item">
                        <div class="mb-3 font-italic">Nombre: {{active_item.requestor.first_name}} {{active_item.requestor.last_name}}</div>
                        <div class="mb-3 font-italic">Email: {{active_item.requestor.email}}</div>
                        <div class="mb-3 font-italic">Telefono: {{active_item.requestor.phone}}</div>
                        <div class="mb-3 font-italic">Posicion: {{active_item.requestor.address}}</div>
                        <div class="mb-3 font-italic">Compania: {{active_item.requestor.company}}</div>
                        <div class="mb-3 font-italic">Pais: {{active_item.requestor.country}}</div>
                        <div class="mb-3 font-italic">Region: {{active_item.requestor.region}}</div>
                        <div class="mb-16 font-italic">Area de interes: {{active_item.requestor.concern}}</div>
                        <div>
                            Mensaje de contacto
                        </div>
                        <div class="m-10">
                            Me gustaria que me contacten para que me den mas detalles del proyector que estan desarrollando en Moravia    
                        </div>
                    </div>
                </vs-popup>
            </div>
        </div>
    </div>
</template>
<script>
import AppHeader from '@/layouts/components/Header.vue'
import BreadCrumb from '@/views/custom/BreadCrumb.vue'
export default {
  components: {
    AppHeader,
    BreadCrumb
  },
  data () {
    return {
      contacts: [],
      detailShow: false,
      active_item: null
    }
  },
  methods: {
    openDetail (idx) {
      this.active_item = this.contacts.find((it) => it.id === idx)
      this.detailShow = true
    }  
  },
  created () {
    this.$loading.show(this)
    this.$http.post('/api/setting/contact_request')
      .then((response) => {
        this.$loading.hide(this)
        const data = response.data
        console.log(data)
        this.contacts = data.requests
        if (response.data.status === 'ok') {
          this.$vs.notify({
            title: 'éxito',
            text: 'Te has registrado con éxito.',
            color: 'success',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } else {
          this.$vs.notify({
            title: 'Oyu',
            text: 'Operación fallida',
            color: 'error',
            iconPack: 'feather',
            icon: 'icon-alert-circle'
          })
        } 
      })
  }
    
}
</script>
<style lang="scss">
.setting-contact-main {
    min-height: calc(var(--vh, 1vh) * 100 - 150px);
    .link-btn {
        font-size: 0.8rem !important;
        padding: 0.4rem 0.6rem !important;
        border-radius: 0.9rem !important;
    }

    .vs-con-table{
        background: #8BAFB6;
        .vs-con-tbody {
            border: 0 !important;
            .vs-table--thead {
                tr {
                    background: #164A8B !important;
                    color: white;
                    .vs-table-text {
                        text-align: center;
                        justify-content: center;
                        font-size: 1rem !important;
                        padding: 0.6rem !important
                    }
                }
            }
            .tr-values {
                /* border: 1px solid silver; */
                background: none !important;
                td {
                    text-align: center;
                    padding: 15px !important
                }
            }
        }
    } 
}
.contact-popup {
    .vs-popup--header {
        display: none !important;
    }
    .vs-popup--content {
        padding: 0 !important;
        margin-top: 0 !important;
        width: 100% !important;
    }
}


</style>