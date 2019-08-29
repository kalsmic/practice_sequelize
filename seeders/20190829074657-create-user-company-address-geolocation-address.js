'use strict';

const users = require("../json/users.json");

const sqlQuery = ({name, username, email, address,phone, website, company}) => `
DO $$

DECLARE companyId INTEGER;
DECLARE geoLocationId INTEGER;
DECLARE addressId INTEGER;
BEGIN
INSERT INTO "Company" ("name", "catchPhrase", "bs") VALUES
('${company.name}', '${company.catchPhrase}', '${company.bs}') RETURNING "id" INTO companyId;
INSERT INTO "GeoLocations" ("lat", "lng") VALUES
('${address.geo.lat}', '${address.geo.lng}') RETURNING "id" INTO geoLocationId;
INSERT INTO "Addresses" ("street", "suite", "city", "zipcode","geoLocationId") VALUES
('${address.street}', '${address.suite}', '${address.city}', '${address.zipcode}', geoLocationId)
RETURNING "id" INTO addressId;
INSERT INTO "Users" ("name", "username", "email", "addressId", "phone", "website" ,"companyId") VALUES
('${name}', '${username}', '${email}', addressId, '${phone}', '${website}', companyId);

END $$`;

module.exports = {
  up: async queryInterface => {
    const usersSql = users.map(user => {
      const sql = sqlQuery({...user});
      return queryInterface.sequelize.query(sql);
    });
    await Promise.all(usersSql);
  },

  down: async queryInterface => {
    await queryInterface.bulkDelete('Users');
    await queryInterface.bulkDelete('Company');
    await queryInterface.bulkDelete('Addresses');
    await queryInterface.bulkDelete('Geolocation');
  }
};
