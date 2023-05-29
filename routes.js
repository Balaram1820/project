const express = require('express');
const { connectToBSEDatabase, connectToNSEDatabase } = require('./db');

const router = express.Router();

router.get('/collections/bse', async (req, res) => {
  try {
    const db = await connectToBSEDatabase();
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);
    res.json(collectionNames);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/collections/nse', async (req, res) => {
  try {
    const db = await connectToNSEDatabase();
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map((collection) => collection.name);
    res.json(collectionNames);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/collections/bse/:collectionName', async (req, res) => {
  try {
    const { collectionName } = req.params;
    const db = await connectToBSEDatabase();
    const collection = db.collection(collectionName);
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/collections/nse/:collectionName', async (req, res) => {
  try {
    const { collectionName } = req.params;
    const db = await connectToNSEDatabase();
    const collection = db.collection(collectionName);
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
