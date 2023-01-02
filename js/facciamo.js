

export default {
    beforeMount() {
        console.log("beforeMount");
        document.documentElement.scrollTop = 0;
        document.getElementById("mn1").classList.add('active');
    },
    beforeUnmount() {
        console.log("beforeUnmount");
        document.getElementById("mn1").classList.remove('active');
    },
    template: `
<div class="container-d-flex">
    <div class="row mb-0">
        <div class="col-11 text-center">
            <i class="bi-gear-wide-connected top-icons-psl"></i>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 mb-1 title-text-psl"><b>Archeologia</b></p>
            
            <p class="mb-0">Lo studio di uno <b>scheletro</b> e del suo contesto inizia dal recupero, per questo effettuiamo:</p>
            <ul>
                <li>Recupero di resti ossei <b>umani</b> e <b>animali</b></li>
                <li><b>Microscavo</b> di materiale osseo</li>
                <li>Indagini <b>tanatologiche</b> e <b>tafonomiche</b></li>
            </ul>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 mb-1 title-text-psl"><b>Osteologia</b></p>
            
            <p class="mb-0">La pluriennale esperienza nell’ambito dell’osteologia unitamente all’<b>affiancamento a specialisti</b> di <b>differenti discipline</b>
                permettono di massimizzare i dati anche su materiali in cattivo stato di conservazione. Ci occupiamo di:</p>
            <ul>
                <li>Analisi antropologiche di <b>inumazioni</b> e <b>cremazioni</b></li>
                <li>Analisi <b>odontologiche</b></li>
                <li>Ricognizione di <b>reliquie</b></li>
                <li>Analisi <b>archeozoologiche</b></li>
                <li><b>Istologia</b> ossea</li>
                <li><b>Diagnostica per immagini</b> su materiale osseo e dentario</li>
                <li><b>Didattica</b> per le scuole e <b>PCTO</b></li>
            </ul>
        </div>
    </div>
    <div class="row fs-6 mb-4">
        <div class="col-11">
            <p class="fs-3 mb-1 title-text-psl"><b>Tecnologia</b></p>
            
            <p>Grazie al continuo <b>contatto</b> e <b>affiancamento</b> ai ricercatori che operano nel campo dell'antropologia fisica e dell'archeologia abbiamo costruito un gruppo che applica le tecniche di progettazione e sviluppo "<b>agile</b>" e questo ci permette di supportare il lavoro su campo e in laboratorio contribuendo alla creazione di nuove metodologie di studio.</p>
            <p class="mb-0">Il gruppo tecnologico focalizza la propria attenzione sulle seguenti attività:</p>
            <ul>
                <li>Progettazione e implementazione di <b>nuove strumentazioni</b> elettroniche per la raccolta dati</li>
                <li><b>Sviluppo</b> e <b>studio</b> delle tecnologie e strumentazioni estitenti allo scopo di affinarne e estenderne l'utilizzo</li>
                <li>Sviluppo di <b>software</b> e <b>hardware</b> specifici per il settore dell'antropologia fisica</li>
                <li>Erogazione della <b>formazione tecnica</b></li>
            </ul>
            <p>ogni attività viene svolta privilegiando il modello <b>FLOSS</b>.</p>
        </div>
    </div>
</div>
`
}
