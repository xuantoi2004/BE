import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDB1694687042057 implements MigrationInterface {
    name = 'InitDB1694687042057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`goods_category\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`goodName\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`picture\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoice\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`full_name\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`nation\` varchar(255) NOT NULL, \`city\` varchar(255) NOT NULL, \`district\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`shipping\` int NOT NULL DEFAULT '1', \`payment\` int NOT NULL DEFAULT '1', \`total\` int NOT NULL, \`status\` enum ('1', '2', '0') NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`invoice_child\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`qty\` int NOT NULL DEFAULT '1', \`total\` int NOT NULL, \`productId\` int NULL, \`invoiceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productdetail\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`picture\` varchar(50) NOT NULL, \`productId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productprop\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`nameProp\` varchar(255) NOT NULL, \`valueProp\` varchar(255) NOT NULL, \`productId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`customer\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NULL, \`lastName\` varchar(255) NULL, \`nation1\` varchar(255) NULL, \`city1\` varchar(255) NULL, \`address1\` varchar(255) NULL, \`district1\` varchar(255) NULL, \`nation2\` varchar(255) NULL, \`city2\` varchar(255) NULL, \`address2\` varchar(255) NULL, \`district2\` varchar(255) NULL, \`phone\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`avatar\` varchar(255) NULL, \`jcoin\` int NOT NULL DEFAULT '0', \`password\` varchar(255) NOT NULL, \`isAdmin\` tinyint NOT NULL DEFAULT 0, \`active\` tinyint NOT NULL DEFAULT 1, \`gender\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`payment\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`paymentName\` varchar(255) NOT NULL, \`description\` varchar(600) NOT NULL, \`allowed\` tinyint NOT NULL DEFAULT 0, \`supplierId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`supplier\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(1000) NOT NULL, \`address\` varchar(60) NOT NULL, \`phone\` varchar(25) NOT NULL, \`city\` varchar(15) NOT NULL, \`country\` varchar(50) NOT NULL, \`postalCode\` varchar(15) NOT NULL, \`email\` varchar(75) NOT NULL, \`url\` varchar(100) NOT NULL, \`logo\` varchar(75) NOT NULL, \`ranking\` int NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`customerId\` int NULL, UNIQUE INDEX \`IDX_977003cc69959e72078db19db6\` (\`phone\`), UNIQUE INDEX \`IDX_c40cbff7400f06ae1c8d9f4233\` (\`email\`), UNIQUE INDEX \`REL_b28bf31339aa7f2a202bb8146c\` (\`customerId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(60) NOT NULL, \`description\` varchar(255) NOT NULL, \`picture\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`discount\` int NOT NULL, \`discountAvailable\` tinyint NOT NULL DEFAULT 0, \`qty\` int NOT NULL DEFAULT '0', \`productAvailable\` tinyint NOT NULL DEFAULT 1, \`isFlashsale\` tinyint NOT NULL DEFAULT 0, \`isTrending\` tinyint NOT NULL DEFAULT 0, \`supplierId\` int NOT NULL, \`categoryId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`categoryName\` varchar(255) NOT NULL, \`description\` varchar(600) NOT NULL, \`picture\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`goodCategoryId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`orderNumber\` int NOT NULL, \`orderDate\` datetime NOT NULL, \`requiredDate\` datetime NOT NULL, \`transactStatus\` varchar(255) NOT NULL, \`paid\` int NOT NULL, \`paidDate\` datetime NOT NULL, \`fulfilled\` tinyint NOT NULL DEFAULT 0, \`deleted\` tinyint NOT NULL DEFAULT 0, \`customerId\` int NULL, \`paymentId\` int NULL, UNIQUE INDEX \`REL_124456e637cca7a415897dce65\` (\`customerId\`), UNIQUE INDEX \`REL_9ad13532f48db4ac5a3b3dd70e\` (\`paymentId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`shipper\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, \`avatar\` varchar(255) NOT NULL, \`companyName\` varchar(255) NOT NULL, \`active\` tinyint NOT NULL DEFAULT 1, \`rate\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orderdetail\` (\`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deletedAt\` datetime(6) NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`quantity\` int NOT NULL, \`finalPrice\` int NOT NULL, \`finalTotalPrice\` int NOT NULL, \`billDate\` datetime NOT NULL, \`shipDate\` datetime NOT NULL, \`fulfilled\` tinyint NOT NULL DEFAULT 0, \`orderId\` int NULL, \`shipperId\` int NULL, \`productId\` int NULL, UNIQUE INDEX \`REL_aa8ab952b0b4cead542acbe18e\` (\`shipperId\`), UNIQUE INDEX \`REL_ed57365b5815a7e0b94f8c5421\` (\`productId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` ADD CONSTRAINT \`FK_076c4f08a3e421d44878978d2af\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` ADD CONSTRAINT \`FK_2de8bf244406b73bffbf01b123f\` FOREIGN KEY (\`invoiceId\`) REFERENCES \`invoice\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productdetail\` ADD CONSTRAINT \`FK_42f77c2d330e36a128dec7e6570\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productprop\` ADD CONSTRAINT \`FK_980b1ed324498ac3e048f0448e6\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`payment\` ADD CONSTRAINT \`FK_a3772a91be111b4b6a8a496fffa\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`supplier\` ADD CONSTRAINT \`FK_b28bf31339aa7f2a202bb8146cd\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_4346e4adb741e80f3711ee09ba4\` FOREIGN KEY (\`supplierId\`) REFERENCES \`supplier\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_ff0c0301a95e517153df97f6812\` FOREIGN KEY (\`categoryId\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`category\` ADD CONSTRAINT \`FK_d75549613c2ae44496853c6de26\` FOREIGN KEY (\`goodCategoryId\`) REFERENCES \`goods_category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_124456e637cca7a415897dce659\` FOREIGN KEY (\`customerId\`) REFERENCES \`customer\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_9ad13532f48db4ac5a3b3dd70e5\` FOREIGN KEY (\`paymentId\`) REFERENCES \`payment\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_c2354396f8361da558b647ed342\` FOREIGN KEY (\`orderId\`) REFERENCES \`order\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_aa8ab952b0b4cead542acbe18e7\` FOREIGN KEY (\`shipperId\`) REFERENCES \`shipper\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` ADD CONSTRAINT \`FK_ed57365b5815a7e0b94f8c54217\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_ed57365b5815a7e0b94f8c54217\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_aa8ab952b0b4cead542acbe18e7\``);
        await queryRunner.query(`ALTER TABLE \`orderdetail\` DROP FOREIGN KEY \`FK_c2354396f8361da558b647ed342\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_9ad13532f48db4ac5a3b3dd70e5\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_124456e637cca7a415897dce659\``);
        await queryRunner.query(`ALTER TABLE \`category\` DROP FOREIGN KEY \`FK_d75549613c2ae44496853c6de26\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_ff0c0301a95e517153df97f6812\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_4346e4adb741e80f3711ee09ba4\``);
        await queryRunner.query(`ALTER TABLE \`supplier\` DROP FOREIGN KEY \`FK_b28bf31339aa7f2a202bb8146cd\``);
        await queryRunner.query(`ALTER TABLE \`payment\` DROP FOREIGN KEY \`FK_a3772a91be111b4b6a8a496fffa\``);
        await queryRunner.query(`ALTER TABLE \`productprop\` DROP FOREIGN KEY \`FK_980b1ed324498ac3e048f0448e6\``);
        await queryRunner.query(`ALTER TABLE \`productdetail\` DROP FOREIGN KEY \`FK_42f77c2d330e36a128dec7e6570\``);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` DROP FOREIGN KEY \`FK_2de8bf244406b73bffbf01b123f\``);
        await queryRunner.query(`ALTER TABLE \`invoice_child\` DROP FOREIGN KEY \`FK_076c4f08a3e421d44878978d2af\``);
        await queryRunner.query(`DROP INDEX \`REL_ed57365b5815a7e0b94f8c5421\` ON \`orderdetail\``);
        await queryRunner.query(`DROP INDEX \`REL_aa8ab952b0b4cead542acbe18e\` ON \`orderdetail\``);
        await queryRunner.query(`DROP TABLE \`orderdetail\``);
        await queryRunner.query(`DROP TABLE \`shipper\``);
        await queryRunner.query(`DROP INDEX \`REL_9ad13532f48db4ac5a3b3dd70e\` ON \`order\``);
        await queryRunner.query(`DROP INDEX \`REL_124456e637cca7a415897dce65\` ON \`order\``);
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP INDEX \`REL_b28bf31339aa7f2a202bb8146c\` ON \`supplier\``);
        await queryRunner.query(`DROP INDEX \`IDX_c40cbff7400f06ae1c8d9f4233\` ON \`supplier\``);
        await queryRunner.query(`DROP INDEX \`IDX_977003cc69959e72078db19db6\` ON \`supplier\``);
        await queryRunner.query(`DROP TABLE \`supplier\``);
        await queryRunner.query(`DROP TABLE \`payment\``);
        await queryRunner.query(`DROP TABLE \`customer\``);
        await queryRunner.query(`DROP TABLE \`productprop\``);
        await queryRunner.query(`DROP TABLE \`productdetail\``);
        await queryRunner.query(`DROP TABLE \`invoice_child\``);
        await queryRunner.query(`DROP TABLE \`invoice\``);
        await queryRunner.query(`DROP TABLE \`goods_category\``);
    }

}
