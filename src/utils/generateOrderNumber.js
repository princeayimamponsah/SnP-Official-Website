export const generateOrderNumber = () => {
  const prefix = "SNP";
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.floor(1000 + Math.random() * 9000); // 4-digit random
  return `${prefix}-${date}-${random}`;
};
