<template>
<footer> 
    <svg viewBox="4209.3 4660 1514.932 404" class="svg-piso">
        <defs></defs> 
        <path d="M-77.7,67.7s180-205.4,964-48,501.3-84,501.3-84l20.4,404H0Z" transform="translate(4287 4724.3)" class="cls-1-piso">
        </path>
    </svg> 
    <div class="con-links">
        <div class="uls">
            <ul>
                <li class="title">Social</li> 
                <li><a target="_blank" href="https://github.com/lusaxweb/vuesax">GitHub</a></li>
                <li><a target="_blank" href="https://discord.gg/6AZNXEa">Discord</a></li>
                <li><a target="_blank" href="https://twitter.com/vuesax">Twitter</a></li>
                <li><a target="_blank" href="https://www.facebook.com/vuesax/">Facebook</a></li>
                <li><a target="_blank" href="https://www.behance.net/ManuelRovira">Behance</a></li>
                <li><a target="_blank" href="https://dribbble.com/ManuelRovira">Dribbble</a></li>
            </ul>
            <ul>
                <li class="title">Help</li>
                <li><a target="_blank" href="https://github.com/lusaxweb/vuesax/issues">Issues</a></li>
                <li><a target="_blank" href="https://github.com/lusaxweb/vuesax/tree/master/docs">Edit Page</a></li>
                <li><a target="_blank" href="https://github.com/lusaxweb/vuesax/releases">Latest Releases</a></li>
                <li><a target="_blank" href="https://stackoverflow.com/questions/tagged/vuesax">Stackoverflow</a></li>
                <li><a target="_blank" href="https://github.com/lusaxweb/vuesax/wiki">FAQ</a></li>
            </ul>
            <ul>
                <li class="title">More</li> 
                <li><a target="_blank" href="https://lusaxweb.github.io/vuesax-blog/">Blog</a></li>
                <li><a target="_blank" href="http://lusaxweb.net/">Lusaxweb</a></li>
                <li><a target="_blank" href="mailto:vuesax@gmail.com">Email</a></li>
                <li><a target="_blank" href="https://github.com/lusaxweb/vuesax/pulls">Pull request</a></li>
                <li><a target="_blank" href="https://codepen.io/lusaxweb/pen/mxMKYr">Codepen Template</a></li>
            </ul>
        </div>
    </div> 
    <div class="bosque">
        <GmapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 250px">
            <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            />
        </GmapMap>
    </div>
    <div class="con-copy">
        Copyright © 2020 mfcdemo
    </div>
</footer>


</template>
<script>
export default {
  data () {
    return {
      center: { lat: 10.0, lng: 10.0 },
      markers: [
        { position: { lat: 10.0, lng: 10.0 } },
        { position: { lat: 11.0, lng: 11.0 } }
      ]
    }
  }
}
</script>
<style lang="scss">
footer{
    
    width: 100%;
    height: auto;
    background: #110d26;
    position: relative;
    z-index: 1;
    margin-top: 250px;
    display: block;
    
    .bosque{
        position: absolute;
        z-index: 100;
        width: 33%;
        right: 10%;
        bottom: 70px;
        max-height: 200px;
    }

    .svg-piso {
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        top: 0;
        display: block;
        left: -6%;
        position: absolute;
        width: 112%;
        z-index: 10;
    }

    .con-copy{
        position: absolute;
        right: 20px;
        bottom: 15px;
        color: hsla(0,0%,100%,.2);
        z-index: 500;
        display: block;
        font-size: 12px;
        padding-right: 30px;
    }

    .con-links {
        position: relative;
        width: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        z-index: 200;
        left: 0;
        /* padding-bottom: 40px; */
        padding-left: 20px;

        .uls {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: start;
            -ms-flex-align: start;
            align-items: flex-start;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            width: 100%;
            max-width: 500px;

            ul {
                display: block;
                width: 100%;
                line-height: normal;
                padding-left: 0;
                position: relative;
                padding-left: 20px;

                li {
                    padding-left: 20px;
                    list-style: none;
                    line-height: 2rem;
                }
                .title {
                    padding-left: 10px;
                    color: #fff;
                    font-size: 1.6rem;
                    padding-bottom: 15px!important;
                    font-weight: 500;
                }
            }
        }

         a {
            cursor: pointer;
            font-size: 1rem;
            color: hsla(0,0%,100%,.6);
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
            text-shadow: 0 0 5px #000;
        }

        a:hover {
            color: white;
        }

    }
}

</style>

