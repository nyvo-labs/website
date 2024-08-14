---
title: Acridotheres+ WebAuth
---

# Acridotheres+ WebAuth

Acridotheres+ WebAuth is a service that allows you to access the keys for decrypting an archive without having to store them on your device. You can add time limits, revoke access, and more. You can use this service to lock your archive forever after it has been decrypted once, too.

Before the keys are sent to the client, the client has to authenticate with the service. We store the keys only after multiple complex cryptographic operations, and we do not store the keys in plain text. The keys are stored in a way that they can be decrypted only by the client that has the correct credentials. We also guarantee that it is in fact impossible to get the keys just by accessing the database.
