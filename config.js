  module.exports = {

	yourID: "339439720289271808", //Kendi ID'niz
  
	setupCMD: "!emojirol-aç", // Botu ne ile başlatacaksınız.

	deleteSetupCMD: true, // true => setupCMD'ye yazdığınız komutu siler. false => Silmez xd

	initialMessage: `**Kayıt olmak için aşağıdaki emojiye tıklayın. **`, //İlk atılacak mesaj
	
	embedMessage: `
	İstediğiniz rolü almak için istediğiniz emojiye basın.
	
	Eğer rolü bırakmak istiyorsanız, sadece tepkiyi geri çekin!
	`, // Eğer embed mesajı açtıysanız, açıklaması.
	
  /*
    # Eğer 34. satırda embed true ise bu ayarları yapmalısınız.
  */
	embedFooter: "Emoji-rol sistemi", //Embedın en alttaki küçük yazısı
	
	roles: ["Üye"],

	/*
    # Sunucu özel emojileriniz için lütfen sadece emoji adı girin.
  */
	reactions: ["💻"],

	embed: true, // Eğer embed olmasını istiyorsanız true istemiyorsanız false işaretleyiniz.

	embedColor: "#fcc603", // Embed rengi

	embedThumbnail: false, // Embedin thumbnaili olsun mu? (false => olmasın true => olsun true işaretlersiniz 37. satıra fotoğraf linki girin.) (thumbnail: sağ üstteki küçük foto)

	embedThumbnailLink: "", 

	botToken: "" // Token girilecek.
};
