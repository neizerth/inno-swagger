import UserModel from "@src/models/User.model";
import UserRepo from "@src/repos/UserRepo";

beforeEach(async () => {
	await UserRepo.deleteAllUsers();
});

describe("users module", () => {
	test("should add user", async () => {
		const user = UserModel.new({
			name: "John Doe",
			email: "john.doe@example.com",
		});

		const beforeUsers = (await UserRepo.getAll()) ?? [];
		const beforeCount = beforeUsers.length;

		await UserRepo.add(user);

		const afterUsers = (await UserRepo.getAll()) ?? [];
		const afterCount = afterUsers.length;

		expect(afterCount).toBe(beforeCount + 1);
	});
	test("should get all users", async () => {
		const users = (await UserRepo.getAll()) ?? [];
		const count = users.length;

		expect(count).toBe(0);
	});
	test("delete user by id", async () => {
		const initialUsers = (await UserRepo.getAll()) ?? [];
		expect(initialUsers.length).toBe(0);

		const user = UserModel.new({
			name: "John Doe",
			email: "john.doe@example.com",
		});
		await UserRepo.add(user);

		const afterAddingUsers = (await UserRepo.getAll()) ?? [];
		expect(afterAddingUsers.length).toBe(1);

		await UserRepo.delete(user.id);
		const afterCount = (await UserRepo.getAll()) ?? [];
		expect(afterCount.length).toBe(0);
	});
});
