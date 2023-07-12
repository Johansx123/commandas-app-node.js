CREATE TABLE IF NOT EXISTS `unicentaopos`.`ordersapi` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `orderid` VARCHAR(50),
  `count` INT,
  `details` VARCHAR(255),
  `ticketid` VARCHAR(50),
  `ordertime` TIMESTAMP,
  PRIMARY KEY (`id`)
);