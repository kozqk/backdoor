# 👿**Flipper Zero BadUSB JavaScript Backdoor + SAM Exfiltration**🐬

![Flipper Zero](https://img.shields.io/badge/device-Flipper%20Zero-orange?style=flat-square) ![Platform](https://img.shields.io/badge/platform-Windows-blue?style=flat-square)  ![Status](https://img.shields.io/badge/status-educational-lightgrey?style=flat-square)  

## 📋 **Descrizione**  
Questo repository contiene uno **script BadUSB educativo per il Flipper Zero**, progettato per eseguire attacchi simulati su un sistema Windows. Lo script sfrutta un payload che automatizza attività come:   
- **Creazione di un nuovo utente con privilegi di amministratore**  
- **Exfiltrazione del file SAM contenente hash delle password**  

> ⚠️ **DISCLAIMER:** Questo script è fornito **solo per scopi didattici** e **non deve essere utilizzato in ambienti non autorizzati**. L'uso improprio può violare leggi locali o internazionali e comportare conseguenze legali.

---

## 🛠️ **Funzionalità Principali**  
1. **Simulazione di attacco BadUSB**: Sfrutta il Flipper Zero per eseguire comandi in modo non autorizzato.  
2. **Creazione di utenti privilegiati**: Aggiunge un utente con privilegi sudo/amministratore.  
3. **Exfiltrazione di dati sensibili**: Copia il file SAM dal sistema di destinazione su una chiavetta USB.  
4. **Automazione del Flipper Zero**: Visualizza messaggi e ritardi direttamente sul dispositivo.  

---

## 🖥️ **Requisiti**  
- Flipper Zero con supporto BadUSB
- Firmware modificato con supporto javascript 
- Sistema operativo Windows  
- Connessione USB per montare l’immagine di archiviazione  
- Layout tastiera configurato correttamente  

---

## 🚀 **Come Utilizzare lo Script**  
1. **Clona il repository**:  
   ```bash
   git clone https://github.com/kozqk/backdoor
   cd backdoor
   ```
2. **Modifica il layout della tastiera** se necessario, nel file `backdoor.js`.  
3. **Carica lo script sul Flipper Zero** utilizzando l'interfaccia USB o SD card.  
4. **Collega il Flipper Zero** al sistema Windows di destinazione e avvia lo script.

---

## ⚠️ **Avvertenze Legali**  
```plaintext
Questo script è fornito solo a scopo didattico. L'uso improprio di questo codice è vietato e può violare leggi locali o internazionali. Assicurati di avere l'autorizzazione esplicita per testare qualsiasi sistema su cui viene utilizzato.
```

---

## 📝 **Contatti**  
Per segnalare problemi o suggerire miglioramenti:  
📧 **Email**: mrkozqk@proton.me  
🌐 **GitHub**: [https://github.com/kozqk](https://github.com/kozqk)  

---

## 🌟 **Contribuisci**  
Sentiti libero di fare un **fork** del progetto e inviare una **pull request**.  

---

## 📸 **Screenshot**  
![Flipper Zero UI](https://via.placeholder.com/800x400?text=Flipper+Zero+UI+Screenshot)  

---
