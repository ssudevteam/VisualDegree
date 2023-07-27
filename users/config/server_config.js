// for use with firebase-admin package
// validates client-side credential keys
// from initial login and persistant session cookies
// used by middleware for application authorization with firebase server
const server_config = {
  type: "service_account",
  project_id: "visual-degree-f99a8",
  private_key_id: "320087f6955da52f4f1095d1e86c1ce10b58c3e3",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCskZmc8pubUuSW\ndKr91dfefaGJdhiUtq9x7oC+82xLd+svybWaNx9w46/mOC8WOdo2tEuz6OCTALVE\nnQ1vCsEPZWLgP+QReXUr66ofCVZYx7f8kamw8F29lBDRHg7li5jvTVzSnyIN/FK4\n0WXEf28ms/bjYl2renmkAR3UY8xTyGdV8qdcG/13joaGp0x3p6KUTpZaDfCps+5t\nQKTrqVG1n1uQyQAZVZr4GBwItAcDSCUPqXyHj7IulEZ3F+MNJEXJsug3a5Fcwh44\nYv0u5heWe+9GqkEKg8C8T4Rq1SnZMnuh1yD67tecB/jgP9EiCfluUnPn5H1xFxkf\nr53NPr+nAgMBAAECggEAGWCB8/wTWPiMJ/n5KUHYsF3OMv48aCYjT8BQi4QVgVWd\nrtXdUFPZ2kqJU/QgLIcOaWwDE+5jlAqPHYtw7crpkB+LNkn++njfe7l4t36yhXS9\nQDWVfDEkv9u1y2K9sxDfyRUZ2NlQ8ziPW6Fjc02AJXNik5akCrMEj1MgtVqFsi4w\n/lN/uhEGAw1dvoEcOt6M0bm/Zzr2LdT0pyT51cj35QOANVBZ0bITsV4H73wjaAcY\nPdSOXQEbY/msVxGeyjCRP5lvQYIn/BhgA/9YDWcFY0mKJG0srqBPbQgDa1Z3v7fw\nBLiQcfR3ZBH5SjNtNUjaPWZHLtKcC5PS/xtdaogivQKBgQDTcNlXXEAL9H+pSHXc\nIT8/X9x9rlDPsX5HOD3LqMFAbB0gnxQ+A5bUtjsmjohOXgIdlLCC+X9Ln5/DSqpb\nUmbfSGr5a0FSFUNvVKmXsumL0GqLEh78b+jw2qUdjEfBmmgrb45CK6js1F0M/CPX\n5YPTv+7ZJmCK+6uX8QRb1c8/ewKBgQDQ7540jugzOgAB+DeOKxAdLX9qDAGfp08F\naOX5sA8H0WTfUgIh4gDhEvJ0Gig+kkSMPma23f4dZujsLv4CdILlsnGuJRmXqSFq\n+LnVWPK1wu9486fcLVoJeV41G5IDeVR5UyrWKbV43SyGjIaPRXleqkxETeSBu+h3\nxIAvcRDSxQKBgQChnTczNBrsSGUv0mfr6ym52h7hndS8+9EmxNFPEt0rzbdx0MYb\nJIksa2HI9dcv92EslRNZ+TSYbBkkn7SY+uIQtvy1SoryH7icpxy+DA3BRXu6cw5m\nK2/kcWsVq7zJOal30dvtrgt/gk7hdvQ6uH7L4n/BUTkn4nflOl73hvTTcwKBgFYv\nodkYYhxPfpVRaMlSZjFDBV4fWcQb5fLbVJJs16Zn7+5XC94iNi6h/DV8XMGC4Jfh\nXcltRVenjclvkQQ+P4i01UP6tdXjxI81zqJ9MJFduh7wk3u1kYB6+it6Ff8s23W4\nouD5D4yt36IY8aDEDc7I/PDoGKyTcM+G1UG8qC3pAoGAfKKhsDwPiZ6n0f9RgK3I\n3knc+83co9mRmjWyOx5Lg9vN02qJiyANXJp3geUxA3PhUNWtpJc2eOU8bXNTXU8Q\njQAOMzFulltnbSClrniY5Z97pIEJF5JVvBN3aSCp/63mk8Jul2PmrYNCYPxsKH8s\nvhQY0oXdoRbXRoJj/voX2po=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-wr9uu@visual-degree-f99a8.iam.gserviceaccount.com",
  client_id: "106098371096145932312",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wr9uu%40visual-degree-f99a8.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

module.exports = server_config;
