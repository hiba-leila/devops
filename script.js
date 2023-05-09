const { exec } = require('child_process');

// Fonction pour exécuter la commande git pull
function gitPull(callback) {
  exec('cd dvHS && git pull', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    console.log(stdout);
    callback();
  });
}

// Fonction pour exécuter le fichier index.js
function runIndex() {
  console.log('Exécution de index.js');
  // Mettre ici le code pour exécuter index.js
}

// Appeler la fonction gitPull pour exécuter la commande git pull
gitPull((err) => {
  if (err) {
    console.error('La commande git pull a échoué');
    return;
  }
  console.log('La commande git pull a réussi');
  // Appeler la fonction runIndex une fois que la commande git pull est terminée
  runIndex();
});