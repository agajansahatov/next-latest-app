"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
	public_id: string;
}

const UploadPage = () => {
	const [publicId, setPublicId] = useState("");

	return (
		<>
			{publicId && (
				<CldImage
					src={publicId}
					width={270}
					height={180}
					alt="A coffee image"
					className="pb-5"
				/>
			)}
			<CldUploadWidget
				uploadPreset="next-latest-app"
				options={{
					sources: ["local"],
					multiple: false,
				}}
				onSuccess={(result) => {
					if (result.event !== "success") return;
					const info = result.info as CloudinaryResult;
					console.log(info.public_id);
					setPublicId(info.public_id);
				}}
			>
				{({ open }) => (
					<button className="btn btn-primary" onClick={() => open()}>
						Upload
					</button>
				)}
			</CldUploadWidget>
		</>
	);
};

export default UploadPage;
