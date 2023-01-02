
export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn2").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn2").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row mb-0">
        <div class="col-11 text-center">
            <i class="bi-buildings top-icons-psl"></i>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 mb-1 title-text-psl"><b>Coordinatore</b></p>
            <p><b>Dottoressa Alessandra Mazzucchi</b></p>

            <p class="fs-3 mb-1 title-text-psl"><b>Antropologi</b></p>
            <p class="mb-0"><b>Alessandra Mazzucchi</b> - Antropologo di primo livello</p>
            <p class="mb-0"><b>Valentina Galante</b> - Antropologo di secondo livello</p>
            <p><b>Annalisa Buono</b> - Antropologo di secondo livello</p>

            <p class="fs-3 mb-1 title-text-psl"><b>Archeologi</b></p>
            <p><b>Valentina Galante</b> - Archelogo di primo livello</p>

            <p class="fs-3 mb-1 title-text-psl"><b>Tecnici e professionisti</b></p>
            <p class="mb-0"><b>Roberto Taglioretti</b> - IT manager, sviluppatore hardware e software</p>
            <p class="mb-0"><b>Paolo Alemani</b> - Specialista della sicurezza</p>
            <p><b>Serenella Saccon</b> - Giurista d'impresa</p>

            <p class="fs-3 mb-1 title-text-psl"><b>Aziende collegate</b></p>
            <p class="mb-0"><b>Progettosl - LEICON di Serenella Saccon</b> - Hardware e software</p>
            <p class="mb-0"><b>Argonavis s.r.l.</b> - Hardware, software e cloud provider</p>
            <p><b>ROBDEV di Roberto Taglioretti</b> - Sistemi e software</p>
        </div>
    </div>
</div>
`
}
