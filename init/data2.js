const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    //   image: {
    //     filename: "listingimage",
    //     url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    //   },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
        title: "Ski Chalet in Aspen",
        description:
          "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        // },
        price: 4000,
        location: "Aspen",
        country: "United States",
      },
      {
        title: "Modern Apartment in Tokyo",
        description:
          "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        // },
        price: 2000,
        location: "Tokyo",
        country: "Japan",
      },
      {
        title: "Historic Cottage in Charleston",
        description:
          "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        // },
        price: 1600,
        location: "Charleston",
        country: "United States",
      },
      {
        title: "Beachfront Villa in Greece",
        description:
          "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        // },
        price: 2500,
        location: "Mykonos",
        country: "Greece",
      },
    {
        title: "Secluded Beach House in Costa Rica",
        description:
          "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // },
        price: 1800,
        location: "Costa Rica",
        country: "Costa Rica",
      },
      {
        title: "Private Island Retreat",
        description:
          "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        // },
        price: 10000,
        location: "Fiji",
        country: "Fiji",
      },
      {
        title: "Historic Brownstone in Boston",
        description:
          "Step back in time in this elegant historic brownstone located in the heart of Boston.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        // },
        price: 2200,
        location: "Boston",
        country: "United States",
      },
      {
        title: "Beachfront Bungalow in Bali",
        description:
          "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        // },
        price: 1800,
        location: "Bali",
        country: "Indonesia",
      },
      {
        title: "Charming Cottage in the Cotswolds",
        description:
          "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
        // image: {
        //   filename: "listingimage",
        //   url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // },
        price: 1200,
        location: "Cotswolds",
        country: "United Kingdom",
      },
      
    ];
    
    module.exports = { data: sampleListings };