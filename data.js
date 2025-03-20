// Disease remedies data
const diseaseDetails = {
  "stomach ache": {
    "allopathy": "For stomach ache, antacids, pain relievers like ibuprofen, and sometimes antibiotics are used based on the cause.",
    "homeopathy": "Homeopathic remedies include Nux Vomica, Chamomilla, and Carbo Veg for relieving stomach pain.",
    "ayurvedic": "Ayurveda recommends ginger, peppermint tea, and a warm turmeric milk for soothing stomach ache."
  },
  "fever": {
    "allopathy": "Allopathic treatments for fever include antipyretics such as paracetamol or ibuprofen.",
    "homeopathy": "Homeopathic remedies for fever include Belladonna, Aconite, and Ferrum Phos.",
    "ayurvedic": "Ayurvedic treatments such as drinking Tulsi tea and using honey with ginger help in lowering the fever."
  },
  "knee pain": {
    "allopathy": "Pain relievers and anti-inflammatory medications like NSAIDs are common for knee pain.",
    "homeopathy": "Rhus tox and Bryonia are homeopathic remedies for knee pain.",
    "ayurvedic": "Ayurvedic treatments such as massage with Eucalyptus oil and consuming turmeric milk can help relieve knee pain."
  },
  "back pain": {
    "allopathy": "For back pain, anti-inflammatory drugs like ibuprofen, and muscle relaxants are often prescribed.",
    "homeopathy": "Homeopathic remedies like Hypericum, Arnica, and Ruta Graveolens help alleviate back pain.",
    "ayurvedic": "Ayurveda recommends Ashwagandha and using warm compresses to relieve back pain."
  },
  "wheezing": {
    "allopathy": "Bronchodilators and corticosteroids are used to treat wheezing and asthma symptoms.",
    "homeopathy": "Homeopathic remedies like Arsenicum album and Antimonium tartaricum are helpful for wheezing.",
    "ayurvedic": "Ayurvedic remedies like turmeric and honey, or drinking Tulsi tea are good for clearing the chest."
  },
  "cough": {
    "allopathy": "Cough syrups with dextromethorphan or antihistamines help treat cough.",
    "homeopathy": "Homeopathic remedies for cough include Drosera, Bryonia, and Rumex crispus.",
    "ayurvedic": "Ayurvedic remedies like honey with black pepper, ginger tea, and drinking warm water with turmeric can help with cough."
  },
  "asthma": {
    "allopathy": "Bronchodilators (like Salbutamol) can be prescribed to open up the airways.",
    "homeopathy": "Arsenicum album: Helps with respiratory distress, especially in cold, damp weather.",
    "ayurvedic": "Tulsi (Holy Basil): Boil a few leaves in water and inhale steam for respiratory relief."
  },
  "acidity":{
    "allopathy": "Antacids (like Tums) neutralize stomach acid.",
    "homeopathy": "Carbo vegetabilis: Helps relieve bloating and indigestion.",
    "ayurvedic": "Ginger & Lemon: Mix ginger juice with lemon and honey in warm water. It helps reduce acidity."
  },
  "acne":{
    "allopathy": "Topical creams (like Benzoyl Peroxide) can help control pimples.",
    "homeopathy": "Sulphur: Often used for acne with itching and inflammation.",
    "ayurvedic": "Neem: Neem oil or crushed leaves can be applied to the skin to help with acne."
  },
  "dandruff": {
    "allopathy": "Anti-dandruff shampoos (like Ketoconazole or Zinc Pyrithione) can be used.",
    "homeopathy": "Sulphur: For dry, flaky scalp with itching.",
    "ayurvedic": "Coconut Oil with Lemon: Massaging your scalp with this combination helps reduce dandruff."
  },
  "insomnia": {
    "allopathy": "Melatonin supplements can help regulate sleep cycles.",
    "homeopathy": "Coffea cruda: For restless sleep due to overactive mind.",
    "ayurvedic": "Ashwagandha: Known for its calming properties, it helps reduce stress and improve sleep."
  },
  "obesity": {
    "allopathy": "Lifestyle changes: Exercise and diet management.",
    "homeopathy": "Graphites: For individuals with sluggish metabolism and a tendency to overeat.",
    "ayurvedic": "Cumin, Coriander & Fennel Tea: This herbal mix aids digestion and can help with weight loss"
  },
  "eye strain":{
    "allopathy": "Eye drops to reduce irritation.",
    "homeopathy": "Euphrasia: Good for irritated eyes, especially when associated with dryness.",
    "ayurvedic": "Cucumber Slices: Place chilled cucumber slices over your eyes for a refreshing relief."
  }

};

// Function to display the remedies based on the search input when search button is clicked
function searchDisease() {
  const searchQuery = document.getElementById('searchBar').value.trim().toLowerCase();
  const remedyCards = document.getElementById('remedyCards');
  remedyCards.innerHTML = ""; // Clear previous results

  if (searchQuery === "") {
    alert("Please enter a disease name!");
    return; // Do nothing if the search bar is empty
  }

  // If the disease exists in the details object, show the cards
  if (diseaseDetails[searchQuery]) {
    const diseaseData = diseaseDetails[searchQuery];
    const cardData = [
      { title: "ALLOPATHY", content: diseaseData.allopathy },
      { title: "HOMEOPATHY", content: diseaseData.homeopathy },
      { title: "AYURVEDIC", content: diseaseData.ayurvedic }
    ];

    // Create and append the cards to the container dynamically
    cardData.forEach(card => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.content}</p>
      `;
      remedyCards.appendChild(cardElement);
      cardElement.style.display = "block"; // Show the card after adding it
    });
  } else {
    // If no disease is found, display a message
    remedyCards.innerHTML = "<p>No remedies found for this disease. Please try another one.</p>";
  }
}

